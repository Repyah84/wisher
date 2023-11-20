import { useMemo } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import { useItemDelete } from "~gql/hooks/item-delete.mutate"
import { useUserDelete } from "~gql/hooks/user-delete.mutate"
import { IsPartners } from "~helpers/is-partners"
import { deleteItem } from "~store/actions/delete-item"
import { resetCollectionsWithImages } from "~store/slices/collections-with-images"
import type { RootState } from "~store/wisher.store"
import { Popup } from "~views/components/popup/popup"
import { ItemSetting } from "~views/widgets/item-setting/item-setting"

import { Badge } from "./components/badge/badge"
import { useHandleApp } from "./hooks/handle-app"
import { useMount } from "./hooks/mount"
import { useNavigateWithRedirect } from "./hooks/navigate-with-redirect"
import { Dialog } from "./widgets/dialog/dialog"

export const Root = () => {
  const {
    isShow,
    hasMessage,
    hasBadge,
    dispatch,
    setWisherState,
    logoutWithNavigate
  } = useHandleApp()

  const itemId = useSelector(({ item: { data } }: RootState) => data?.id)

  const isPartner = useMemo(() => {
    return IsPartners()
  }, [])

  const { loading, deleteWisher } = useItemDelete()
  const { loading: deleteUserLoading, deleteUser } = useUserDelete()

  const { navigateWithRedirect } = useNavigateWithRedirect()

  const { state, animationEnd } = useMount(isShow || isPartner)

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
        logoutWithNavigate()
      }
    })
  }

  return (
    <div
      has-badge={hasBadge.toString()}
      is-show={isShow.toString()}
      is-exists={state.toString()}
      is-visible={isPartner.toString()}
      onTransitionEnd={animationEnd}
      className="extensions-wisher-root">
      <Badge isShow={hasBadge} />

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
}
