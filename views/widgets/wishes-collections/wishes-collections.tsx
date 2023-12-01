import optionSvgIcon from "data-base64:~assets/option-bar.svg"
import { useContext, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useCollections } from "~gql/hooks/collections"
import { useCollectionsMutate } from "~gql/hooks/collections.mutate"
import type { Collection } from "~gql/types/graphql"
import { setCollections } from "~store/slices/collections"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { FileSvgIcon } from "~views/components/icons/file/file"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useCollectionsState } from "~views/hooks/collections"
import { WishesCollection } from "~views/widgets/wishes-collection/wishes-collection"

import { CollectionsDnd } from "../collections-dnd/collections-dnd"

interface Props {
  collections: Collection[]
}

export const WishesCollections = ({ collections }: Props) => {
  const dispatch = useDispatch()

  const { collectionIds, getCollectionById } = useCollectionsState()

  const { loading: loadingCollection, getCollections } = useCollections()

  const { loading: collectionUpdateLoading, addCollection } =
    useCollectionsMutate()

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const [newCollectionState, setNewCollectionState] = useState([])
  const collectionsWithImage = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  const loading = useMemo(() => {
    return (
      collections.length !== collectionsWithImage.length ||
      collectionUpdateLoading ||
      loadingCollection
    )
  }, [
    collectionUpdateLoading,
    collectionsWithImage,
    loadingCollection,
    collections
  ])

  const onAddCollectionClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "create-collection" }))
  }

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    if (collectionIds.toString() === newCollectionState.toString() || loading) {
      return
    }

    const collectionDND = newCollectionState.map(
      (id) => getCollectionById(id)?.title
    )

    addCollection(collectionDND).then(() => {
      getCollections().then(({ data: { collections } }) => {
        dispatch(setCollections(collections))
      })
    })
  }

  const onReorderClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "collections-dnd" }))
  }

  return (
    <>
      <div className="extensions-wisher-wishes-collection">
        <div className="extensions-wisher-wishes-collection__header">
          <span>{collections.length} Collections</span>

          <div className="extensions-wisher-wishes-collection__tools">
            <Button onClickFn={onAddCollectionClick} btnType="icon">
              <FileSvgIcon />
            </Button>

            {loading ? (
              <div className="extensions-wisher-wishes-collection__loader">
                <Loader size={5.5} isLoading={true} />
              </div>
            ) : (
              <Button onClickFn={onReorderClick} btnType="icon">
                <img src={optionSvgIcon} width={24} height={24} alt="Option" />
              </Button>
            )}
          </div>
        </div>

        <div className="extensions-wisher-wishes-collection__scroll-bar">
          {collections.map((collection) => (
            <WishesCollection key={collection.id} collection={collection} />
          ))}
        </div>
      </div>

      <Popup
        hasPopup={hasMessage === "collections-dnd"}
        title="Reorder"
        onCloseClick={onPopupClose}>
        <CollectionsDnd
          collectionIds={collectionIds}
          collectionsDrag={setNewCollectionState}></CollectionsDnd>
      </Popup>
    </>
  )
}
