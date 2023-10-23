import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { useItemMutate } from "~gql/hooks/item.mutate"
import type { WisherSearchData } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { EditForm } from "~views/widgets/edit-form/edit-form"
import { Header } from "~views/widgets/header/header"

export const ItemEditPage = () => {
  const navigate = useNavigate()

  const { itemId } = useParams()

  // const { data: addItemData, loading, addItem } = useItemMutate()

  const input = useSelector(({ items: { data } }: RootState) =>
    data.find(({ id }) => itemId === id)
  )

  const data: WisherSearchData = { input, images: [] }

  const onSaveClick = (data: WisherSearchData) => {
    console.log("@@@@@@@@@@@@@@@", data)

    navigate(`/wisher-item/${itemId}`)
    // addItem({ input: data.input, image: data.imageUpload })
  }

  // useEffect(() => {
  //   if (!addItemData) {
  //     return
  //   }

  //   navigate(`/wisher-item/${itemId}`)
  // }, [addItemData])

  return (
    <div className="extensions-wisher-edit-item-page">
      <Header />

      <EditForm data={data} loading={false} onSaveClick={onSaveClick} />
    </div>
  )
}
