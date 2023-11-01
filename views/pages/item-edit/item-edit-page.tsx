import { useMemo } from "react"
import { useDispatch } from "react-redux"

import { useItemMutate } from "~gql/hooks/item.mutate"
import { InputItemDTO } from "~helpers/get-item-input.dto"
import { updateItem } from "~store/actions/update-item"
import { resetCollectionsWithImages } from "~store/slices/collections-with-images"
import type { WisherSearchData } from "~store/slices/wisher"
import { useItemRootData } from "~views/hooks/item-root-data"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { EditForm } from "~views/widgets/edit-form/edit-form"
import { Header } from "~views/widgets/header/header"

export const ItemEditPage = () => {
  const { navigate } = useNavigateWithRedirect()

  const dispatch = useDispatch()

  const { loading, addItem } = useItemMutate()

  const item = useItemRootData()

  const editData = useMemo(() => {
    if (item === undefined) {
      throw new Error("Item data is not define")
    }

    return { input: InputItemDTO(item), images: [] }
  }, [item])

  const onSaveClick = ({ input, imageUpload: image }: WisherSearchData) => {
    if (loading) {
      return
    }

    addItem({ input, image }).then(({ data: { item } }) => {
      dispatch(updateItem(item))

      dispatch(resetCollectionsWithImages())

      navigate(`/wisher-item`)
    })
  }

  return (
    <div className="extensions-wisher-edit-item-page">
      <Header />

      <EditForm data={editData} loading={loading} onSaveClick={onSaveClick} />
    </div>
  )
}
