import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { useItemMutate } from "~gql/hooks/item.mutate"
import type { Item } from "~gql/types/graphql"
import type { WisherSearchData } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { EditForm } from "~views/widgets/edit-form/edit-form"
import { Header } from "~views/widgets/header/header"

export const ItemEditPage = () => {
  const navigate = useNavigate()

  const { itemId } = useParams()

  const { loading, addItem } = useItemMutate()

  const input = useSelector(({ items: { data } }: RootState) =>
    data.find(({ id }) => itemId === id)
  )

  const data: WisherSearchData = { input, images: [] }

  const onSaveClick = (data: WisherSearchData) => {
    const input = data.input as Item

    input.__typename = "ItemInput" as any

    console.log("@@@@@@@@@@@@@@@", input)

    addItem({ input, image: data.imageUpload })
      .then(() => {
        navigate(`/wisher-item/${itemId}`)
      })
      .catch(() => {
        navigate(`/wisher-item/${itemId}`)
      })
  }

  return (
    <div className="extensions-wisher-edit-item-page">
      <Header />

      <EditForm data={data} loading={loading} onSaveClick={onSaveClick} />
    </div>
  )
}
