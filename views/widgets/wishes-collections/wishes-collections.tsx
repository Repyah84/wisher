import optionSvgIcon from "data-base64:~assets/option-bar.svg"
import { useContext, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useCollectionsMutate } from "~gql/hooks/collections.mutate"
import { updateUserCollections } from "~store/slices/user"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { FileSvgIcon } from "~views/components/icons/file/file"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { WishesCollection } from "~views/widgets/wishes-collection/wishes-collection"

import { CollectionsDnd } from "../collections-dnd/collections-dnd"

interface Props {
  collections: string[]
}

export const WishesCollections = ({ collections }: Props) => {
  const dispatch = useDispatch()

  const { loading: collectionUpdateLoading, addCollection } =
    useCollectionsMutate()

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const [newCollectionSate, setNewCollectionSate] = useState([])
  const collectionsWithImage = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  const loading = useMemo(() => {
    return (
      collections.length !== collectionsWithImage.length ||
      collectionUpdateLoading
    )
  }, [collectionsWithImage, collectionUpdateLoading, collections])

  const onAddCollectionClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "create-collection" }))
  }

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    if (collections.toString() === newCollectionSate.toString() || loading) {
      return
    }

    addCollection(newCollectionSate).then(() => {
      dispatch(updateUserCollections(newCollectionSate))
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
          {collections.map((name) => (
            <WishesCollection key={name} collectionName={name} />
          ))}
        </div>
      </div>

      <Popup
        hasPopup={hasMessage === "collections-dnd"}
        title="Reorder"
        onCloseClick={onPopupClose}>
        <CollectionsDnd
          collections={collections}
          collectionsDrag={setNewCollectionSate}></CollectionsDnd>
      </Popup>
    </>
  )
}
