import { useContext } from "react"
import { useDispatch } from "react-redux"

import { useItemMutate } from "~gql/hooks/item.mutate"
import { updateItemPurchase } from "~store/actions/update-item-purchase"
import { toggleMarcUsPurchasedState } from "~store/slices/loading"
import { SettingsItem } from "~views/components/settings-item/settings-item"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useItemRootData } from "~views/hooks/item-root-data"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export const ItemSetting = () => {
  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const { addItem } = useItemMutate()

  const item = useItemRootData()

  const { setWisherState } = useContext(WisherStateContext)

  const onEditClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    navigateAndSetRedirect(`/wisher-item-edit`)
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

    addItem({ input: { id: item.id, isPurchased } }).then(() => {
      const updateData = { itemsId: item.id, isPurchased }

      dispatch(updateItemPurchase(updateData))

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
