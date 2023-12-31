import { useDispatch, useSelector } from "react-redux"

import { setWisher, type WisherSearchData } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
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
  const { navigateWithRedirect } = useNavigateWithRedirect()

  const dispatch = useDispatch()

  const wisher = useSelector(({ wisher: { data } }: RootState) => {
    return data || DEFAULT_DATA
  })

  const onSaveClick = (value: WisherSearchData) => {
    dispatch(setWisher({ ...wisher, ...value }))

    navigateWithRedirect("/wisher/wisher-add")
  }

  return (
    <div className="extensions-wisher-edit-page">
      <Header />

      <EditForm data={wisher} onSaveClick={onSaveClick} />
    </div>
  )
}
