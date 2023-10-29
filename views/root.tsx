import { useContext } from "react"
import { useDispatch } from "react-redux"
import { Outlet, useParams } from "react-router-dom"

import { useItemDelete } from "~gql/hooks/item-delete.mutate"
import { useItemMutate } from "~gql/hooks/item.mutate"
import { deleteItemFromCollection } from "~store/slices/collection"
import { resetCollectionsWithImages } from "~store/slices/collections-with-images"
import { deleteItem } from "~store/slices/items"
import { Popup } from "~views/components/popup/popup"
import { ItemSetting } from "~views/widgets/item-setting/item-setting"

import { Badge } from "./components/badge/badge"
import { WisherStateContext } from "./context/wisher/wisher.context"
import { useNavigateWithRedirect } from "./hooks/navigate-with-redirect"
import { Dialog } from "./widgets/dialog/dialog"

export const Root = () => {
  const { navigateWithRedirect } = useNavigateWithRedirect()

  const { itemId } = useParams()

  const { loading, deleteWisher } = useItemDelete()

  const dispatch = useDispatch()

  const {
    wisherSate: { hasMessage, isShow },
    setWisherState
  } = useContext(WisherStateContext)

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  const onAcceptClickDeleteItem = () => {
    if (loading || !itemId) {
      return
    }

    deleteWisher(itemId).then(() => {
      dispatch(deleteItem(itemId))
      dispatch(deleteItemFromCollection(itemId))
      dispatch(resetCollectionsWithImages())

      onPopupClose()

      navigateWithRedirect("/wisher/wishes/wishes-all")
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
    </div>
  )
}
