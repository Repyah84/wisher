import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import type { ItemInput } from "~gql/types/graphql"
import { setWisher } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { EditForm } from "~views/widgets/edit-form/edit-form"
import { Header } from "~views/widgets/header/header"

export const EditWisherPage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const data = useSelector(({ wisher: { data } }: RootState) => data)

  const onSaveClick = (input: ItemInput) => {
    dispatch(setWisher({ ...data, input }))

    console.log("EditWisherPage")

    navigate("/wisher/add-wisher")
  }

  console.log(data)

  return (
    <div className="extensions-wisher-edit-page">
      <Header />

      <EditForm data={data.input} onSaveClick={onSaveClick} />
    </div>
  )
}
