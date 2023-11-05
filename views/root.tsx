import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import { useItemDelete } from "~gql/hooks/item-delete.mutate"
import { useUserDelete } from "~gql/hooks/user-delete.mutate"
import { deleteItem } from "~store/actions/delete-item"
import { resetCollectionsWithImages } from "~store/slices/collections-with-images"
import type { RootState } from "~store/wisher.store"
import { Popup } from "~views/components/popup/popup"
import { ItemSetting } from "~views/widgets/item-setting/item-setting"

import { Badge } from "./components/badge/badge"
import { WisherStateContext } from "./context/wisher/wisher.context"
import { useLogout } from "./hooks/logout"
import { useNavigateWithRedirect } from "./hooks/navigate-with-redirect"
import { Dialog } from "./widgets/dialog/dialog"

export const Root = () => {
  const logout = useLogout()

  const dispatch = useDispatch()

  const {
    wisherSate: { hasMessage, isShow },
    setWisherState
  } = useContext(WisherStateContext)

  const itemId = useSelector(({ item: { data } }: RootState) => data?.id)

  const { loading, deleteWisher } = useItemDelete()
  const { loading: deleteUserLoading, deleteUser } = useUserDelete()

  const { navigateWithRedirect } = useNavigateWithRedirect()

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
    <div is-show={isShow.toString()} className="extensions-wisher-root">
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
}
