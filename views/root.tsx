import { useContext, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { useItemDelete } from "~gql/hooks/item-delete.mutate"
import type { StoreJWT } from "~gql/hooks/signin"
import { useUserDelete } from "~gql/hooks/user-delete.mutate"
import { IsPartners } from "~helpers/is-partners"
import { deleteItem } from "~store/actions/delete-item"
import { resetCollectionsWithImages } from "~store/slices/collections-with-images"
import { resetWisher } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { Popup } from "~views/components/popup/popup"
import { ItemSetting } from "~views/widgets/item-setting/item-setting"

import { Badge } from "./components/badge/badge"
import { WisherStateContext } from "./context/wisher/wisher.context"
import { useAsyncStoreDataWithContext } from "./hooks/async-store-data"
import { useLogout } from "./hooks/logout"
import { useMount } from "./hooks/mount"
import { useNavigateWithRedirect } from "./hooks/navigate-with-redirect"
import { Dialog } from "./widgets/dialog/dialog"

export const Root = () => {
  const [wisherJWT] = useStorage<StoreJWT | null | boolean>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    true
  )

  const [extensionAction, setExtensionAction] = useStorage<{
    tabId: string
    messageId: number
  } | null>(
    {
      key: "action-ai",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const {
    wisherSate: { hasMessage, isShow, tabId },
    setWisherState
  } = useContext(WisherStateContext)

  const logout = useLogout()
  const dispatch = useDispatch()

  const itemId = useSelector(({ item: { data } }: RootState) => data?.id)

  const isPartner = useMemo(() => {
    return IsPartners()
  }, [])

  const { loading, deleteWisher } = useItemDelete()
  const { loading: deleteUserLoading, deleteUser } = useUserDelete()

  const { initDataByBackground } = useAsyncStoreDataWithContext()

  const { navigateWithRedirect } = useNavigateWithRedirect()

  const { state, animationEnd } = useMount(isShow || isPartner)

  useEffect(() => {
    initDataByBackground()

    if (isShow) {
      dispatch(resetWisher())
    }
  }, [isShow])

  useEffect(() => {
    if (wisherJWT === null) {
      logout()
    }
  }, [wisherJWT])

  useEffect(() => {
    if (extensionAction === null || extensionAction.tabId !== tabId) {
      return
    }

    setWisherState((wisher) => ({
      ...wisher,
      isShow: !wisher.isShow,
      hasMessage: null
    }))

    setExtensionAction(null)
  }, [extensionAction])

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  const onAcceptClickDeleteItem = () => {
    if (loading || !itemId) {
      return
    }

    deleteWisher(itemId).then(() => {
      dispatch(deleteItem(itemId))

      dispatch(resetCollectionsWithImages())

      onPopupClose()

      navigateWithRedirect("/wisher/wishes/wishes-all")
    })
  }

  const onAcceptDeleteUser = () => {
    if (deleteUserLoading) {
      return
    }

    deleteUser().then((res) => {
      onPopupClose()

      if (res.data.deleteUser.status) {
        logout()
      }
    })
  }

  return (
    state && (
      <div
        className="extensions-wisher-root"
        onAnimationEnd={animationEnd}
        is-show={isShow.toString()}
        is-visible={isPartner.toString()}>
        <Badge />

        <Outlet></Outlet>

        <Popup
          title="Item settings"
          hasPopup={hasMessage === "item-setting"}
          onCloseClick={onPopupClose}>
          <ItemSetting />
        </Popup>

        <Popup
          hasPopup={hasMessage === "wisher-item-delete"}
          onCloseClick={onPopupClose}>
          <Dialog
            title="Delete the wish ?"
            description="You won’t be able to restore the wish"
            loading={loading}
            onAcceptClick={onAcceptClickDeleteItem}
            onCancelClick={onPopupClose}
          />
        </Popup>

        <Popup
          hasPopup={hasMessage === "delete-user"}
          onCloseClick={onPopupClose}>
          <Dialog
            title="Delete your account?"
            description="You won’t be able to restore the account"
            loading={deleteUserLoading}
            onAcceptClick={onAcceptDeleteUser}
            onCancelClick={onPopupClose}
          />
        </Popup>
      </div>
    )
  )
}
