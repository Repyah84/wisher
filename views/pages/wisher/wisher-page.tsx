import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate, useParams } from "react-router-dom"

import { useCollectionsMutate } from "~gql/hooks/collections.mutate"
import { resetCollection } from "~store/slices/collection"
import {
  deleteCollectionWithImages,
  setCollectionWithImages
} from "~store/slices/collections-with-images"
import { updateUserCollections } from "~store/slices/user"
import type { RootState } from "~store/wisher.store"
import { Help } from "~views/components/help/help"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { AddForm } from "~views/widgets/add-form/add-form"
import { Dialog } from "~views/widgets/dialog/dialog"
import { Footer } from "~views/widgets/footer/footer"
import { Header } from "~views/widgets/header/header"

export const WisherPage = () => {
  const navigate = useNavigate()

  const { name: collectionName } = useParams()

  const dispatch = useDispatch()

  const { loading, addCollection } = useCollectionsMutate()

  const user = useSelector(({ user: { data } }: RootState) => data)
  const collections = useSelector(
    ({ user: { data } }: RootState) => data.collections
  )
  const {
    wisherSate: { isCreateCollectionHelp, hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const messageClosed = () => {
    setWisherState((wisher) => ({ ...wisher, isCreateCollectionHelp: false }))
  }

  const onCreateCollectionClick = (collection: string) => {
    if (loading) {
      return
    }

    addCollection([...user.collections, collection]).then(
      ({ data: { user } }) => {
        dispatch(updateUserCollections(user.collections))

        dispatch(
          setCollectionWithImages({ title: collection, images: [], count: 0 })
        )

        dispatch(resetCollection())

        setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

        navigate(`/wisher/wishes-collection/${collection}`)
      }
    )
  }

  const popupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  const onAcceptDeleteCollection = () => {
    if (loading) {
      return
    }

    const newCollectionList = collections.filter(
      (name) => name !== collectionName
    )

    addCollection(newCollectionList).then(() => {
      dispatch(deleteCollectionWithImages(collectionName))

      dispatch(updateUserCollections(newCollectionList))

      navigate("/wisher/wishes/wishes-collections")

      popupClose()
    })
  }

  return (
    <div className="extensions-wisher-page">
      <Header />

      <Outlet></Outlet>

      <Footer />

      <Popup
        title="Create the collection"
        hasPopup={hasMessage === "create-collection"}
        onCloseClick={popupClose}>
        <Help
          hasMessage={isCreateCollectionHelp}
          hasBtnClose={true}
          onMessageClosed={messageClosed}>
          Keep your gifts and wishes organized with various collections. Here
          are some collection ideas for you to get started: <br />
          Birthday <br />
          Wedding registry <br />
          My Little Black Dress <br />
          My top sneakers <br />
          For parents <br />
          Tip: don’t forget to share your collections with friends and family!
        </Help>

        <AddForm
          btnTitle="create"
          collections={user?.collections}
          loading={loading}
          onSubmitFn={onCreateCollectionClick}
        />
      </Popup>

      <Popup
        hasPopup={hasMessage === "collection-delete"}
        onCloseClick={popupClose}>
        <Dialog
          loading={loading}
          onAcceptClick={onAcceptDeleteCollection}
          onCancelClick={popupClose}
        />
      </Popup>
    </div>
  )
}
