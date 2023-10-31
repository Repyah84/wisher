import { useContext } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import { useItemMutate } from "~gql/hooks/item.mutate"
import { updateCollectionItemPurchaseState } from "~store/slices/collection"
import { updateItemPurchaseState } from "~store/slices/items"
import { toggleMarcUsPurchasedState } from "~store/slices/loading"
import { updateSearchItemPurchaseState } from "~store/slices/search"
import { SettingsItem } from "~views/components/settings-item/settings-item"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useItemRootData } from "~views/hooks/item-root-data"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export const ItemSetting = () => {
  const { itemId } = useParams()

  const dispatch = useDispatch()

  const { navigate } = useNavigateWithRedirect()

  const { addItem } = useItemMutate()

  const item = useItemRootData(itemId)

  const { setWisherState } = useContext(WisherStateContext)

  const onEditClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    navigate(`/wisher-item-edit/${itemId}`)
  }

  const onDeleteClick = () => {
    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: "wisher-item-delete"
    }))
  }

  const onMarlClick = () => {
    dispatch(toggleMarcUsPurchasedState(true))

    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    const isPurchased = !item.isPurchased

    addItem({ input: { id: itemId, isPurchased } }).then(() => {
      const updateData = { itemsId: itemId, isPurchased }

      dispatch(updateItemPurchaseState(updateData))
      dispatch(updateCollectionItemPurchaseState(updateData))
      dispatch(updateSearchItemPurchaseState(updateData))
      dispatch(toggleMarcUsPurchasedState(false))
    })
  }

  return (
    <div className="extension-wisher-item-setting">
      <SettingsItem onClickFn={onEditClick}>
        <span>Edit</span>
      </SettingsItem>

      <SettingsItem onClickFn={onDeleteClick}>
        <span>Delete</span>
      </SettingsItem>

      <SettingsItem onClickFn={onMarlClick}>
        <span>Mark as {item?.isPurchased ? "not purchased" : "purchased"}</span>
      </SettingsItem>
    </div>
  )
}
