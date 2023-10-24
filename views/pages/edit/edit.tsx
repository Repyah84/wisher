import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setWisher, type WisherSearchData } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { EditForm } from "~views/widgets/edit-form/edit-form"
import { Header } from "~views/widgets/header/header"

const DEFAULT_DATA: WisherSearchData = {
  images: null,
  input: {
    currency: "USD",
    faviconUrl: null,
    imageUrl: null,
    note: "",
    personalRating: 0,
    price: 0,
    title: "",
    url: window.location.href
  }
}

export const EditWisherPage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const data = useSelector(({ wisher: { data } }: RootState) => {
    return data === null ? DEFAULT_DATA : data
  })

  const onSaveClick = (value: WisherSearchData) => {
    dispatch(setWisher({ ...data, ...value }))

    navigate("/wisher/wisher-add")
  }

  console.log(data)

  return (
    <div className="extensions-wisher-edit-page">
      <Header />

      <EditForm data={data} onSaveClick={onSaveClick} />
    </div>
  )
}
