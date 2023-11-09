import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

import { useCollectionsMutate } from "~gql/hooks/collections.mutate"
import { initialStateWithName } from "~store/slices/collection"
import {
  deleteCollectionWithImages,
  setCollectionWithImages
} from "~store/slices/collections-with-images"
import { updateUserCollections } from "~store/slices/user"
import type { RootState } from "~store/wisher.store"
import { Help } from "~views/components/help/help"
import { Popup } from "~views/components/popup/popup"
import { useAsyncStoreDataWithContext } from "~views/hooks/async-store-data"
import { AddForm } from "~views/widgets/add-form/add-form"
import { CollectionsLabel } from "~views/widgets/collections-label/collections-label"
import { Dialog } from "~views/widgets/dialog/dialog"
import { Footer } from "~views/widgets/footer/footer"
import { Header } from "~views/widgets/header/header"

export const WisherPage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const {
    wisherSate: {
      isCreateCollectionHelp,
      hasMessage,
      collectionName: defCollectionName
    },
    setWisherState,
    setStoreDataIsCreateCollectionHelp
  } = useAsyncStoreDataWithContext()

  const { loading, addCollection } = useCollectionsMutate()

  const collections: string[] | undefined = useSelector(
    ({ user: { data } }: RootState) => data?.collections || []
  )
  const collectionName = useSelector(
    ({ collection: { data } }: RootState) => data.name
  )

  const onMessageClosed = () => {
    setStoreDataIsCreateCollectionHelp(false)
  }

  const onPopupClose = () => {
    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: null,
      collectionName: ""
    }))
  }

  const onCreateCollectionClick = (collection: string) => {
    if (loading || collections === undefined) {
      return
    }

    addCollection([...collections, collection]).then(({ data: { user } }) => {
      dispatch(updateUserCollections(user.collections))

      dispatch(
        setCollectionWithImages({ title: collection, images: [], count: 0 })
      )

      dispatch(initialStateWithName(collection))

      onPopupClose()

      navigate(`/wisher/wishes-collection`)
    })
  }

  const onCollectionLabelClick = (name: string) => {
    setWisherState((wisher) => ({ ...wisher, collectionName: name }))
  }

  const onAcceptDeleteCollection = () => {
    if (loading || collections === undefined) {
      return
    }

    const newCollectionList = collections.filter(
      (name) => name !== collectionName
    )

    addCollection(newCollectionList).then(() => {
      dispatch(deleteCollectionWithImages(collectionName))

      dispatch(updateUserCollections(newCollectionList))

      navigate("/wisher/wishes/wishes-collections")

      onPopupClose()
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
        onCloseClick={onPopupClose}>
        <div className="extensions-wisher-page__popup">
          <Help
            hasMessage={isCreateCollectionHelp}
            hasBtnClose={true}
            onMessageClosed={onMessageClosed}>
            Keep your gifts and wishes organized with various collections. Here
            are some collection ideas for you to get started: <br />
            Birthday <br />
            Wedding registry <br />
            My Little Black Dress <br />
            My top sneakers <br />
            For parents <br />
            Tip: don’t forget to share your collections with friends and family!
          </Help>

          <CollectionsLabel type="wrap" onLabelClick={onCollectionLabelClick} />

          <AddForm
            btnTitle="create"
            defCollectionName={defCollectionName}
            collections={collections}
            loading={loading}
            onSubmitFn={onCreateCollectionClick}
          />
        </div>
      </Popup>

      <Popup
        hasPopup={hasMessage === "collection-delete"}
        onCloseClick={onPopupClose}>
        <Dialog
          title="Delete the collection ?"
          description="You won’t be able to restore the collection"
          loading={loading}
          onAcceptClick={onAcceptDeleteCollection}
          onCancelClick={onPopupClose}
        />
      </Popup>
    </div>
  )
}
