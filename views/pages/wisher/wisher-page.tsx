import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

import { useCollections } from "~gql/hooks/collections"
import { useCollectionsMutate } from "~gql/hooks/collections.mutate"
import { initialStateWithName } from "~store/slices/collection"
import { deleteCollectionWithImages } from "~store/slices/collections-with-images"
import type { RootState } from "~store/wisher.store"
import { Help } from "~views/components/help/help"
import { Popup } from "~views/components/popup/popup"
import { useAsyncStoreDataWithContext } from "~views/hooks/async-store-data"
import { useCollectionsState } from "~views/hooks/collections"
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

  const { loading: collectionLoading, getCollections } = useCollections()

  const { collectionNames, getCollectionById } = useCollectionsState()

  const collectionId = useSelector(
    ({ collection: { data } }: RootState) => data.collectionId
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
    if (loading || collectionLoading || collectionNames === undefined) {
      return
    }

    addCollection([...collectionNames, collection]).then(() => {
      getCollections().then(({ data: { collections } }) => {
        const collectionId = collections.find(
          ({ title }) => title === collection
        ).id

        dispatch(initialStateWithName(collectionId))

        onPopupClose()

        navigate(`/wisher/wishes-collection`)
      })
    })
  }

  const onCollectionLabelClick = (name: string) => {
    setWisherState((wisher) => ({ ...wisher, collectionName: name }))
  }

  const onAcceptDeleteCollection = () => {
    if (loading || collectionLoading || collectionNames === undefined) {
      return
    }

    const newCollectionList = collectionNames.filter(
      (name) => name !== getCollectionById(collectionId)?.title
    )

    addCollection(newCollectionList)
      .then(() => {
        return getCollections()
      })
      .then(() => {
        dispatch(deleteCollectionWithImages(collectionId))

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
            <br />
            Tip: don’t forget to share your collections with friends and family!
          </Help>

          <div className="extensions-wisher-page__collections">
            <CollectionsLabel
              type="row"
              onLabelClick={onCollectionLabelClick}
            />
          </div>

          <AddForm
            btnTitle="create"
            defCollectionName={defCollectionName}
            collections={collectionNames}
            loading={loading || collectionLoading}
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
          loading={loading || collectionLoading}
          onAcceptClick={onAcceptDeleteCollection}
          onCancelClick={onPopupClose}
        />
      </Popup>
    </div>
  )
}
