import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { useItemMutate } from "~gql/hooks/item.mutate"
import { useGetItemsLazy } from "~gql/hooks/items"
import { InputItemDTO } from "~helpers/get-item-input.dto"
import type { WisherSearchData } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { EditForm } from "~views/widgets/edit-form/edit-form"
import { Header } from "~views/widgets/header/header"

export const ItemEditPage = () => {
  const navigate = useNavigate()

  const { itemId } = useParams()

  const { loading, addItem } = useItemMutate()

  const { getItems, loading: itemsLoading } = useGetItemsLazy()

  const items = useSelector(({ items: { data } }: RootState) => data)

  const editData = useMemo(() => {
    const item = items.find(({ id }) => itemId === id)

    if (item === undefined) {
      throw new Error("Item data is not define")
    }

    return { input: InputItemDTO(item), images: [] }
  }, [items])

  const onSaveClick = ({ input, imageUpload: image }: WisherSearchData) => {
    if (loading || itemsLoading) {
      return
    }

    addItem({ input, image })
      .then(() => {
        return getItems()
      })
      .then(() => {
        navigate(`/wisher-item/${itemId}`)
      })
  }

  return (
    <div className="extensions-wisher-edit-item-page">
      <Header />

      <EditForm
        data={editData}
        loading={loading || itemsLoading}
        onSaveClick={onSaveClick}
      />
    </div>
  )
}
