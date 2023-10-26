import addSvgIcon from "data-base64:~assets/circle-croos.svg"
import { useContext, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { useGetCollectionItems } from "~gql/hooks/collection-items"
import { useAddItemsToCollection } from "~gql/hooks/collection-items.mutate"
import { useCollectionWithImages } from "~gql/hooks/collection-with-images"
import { useGetItemsLazy } from "~gql/hooks/items"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { WisherSelect } from "~views/widgets/wisher-select/wisher-select"
import { WisherCollectionEmpty } from "~views/widgets/wishes-collection-empty/wishes-collection-empty"
import { Wishes } from "~views/widgets/wishes/wishes"

export const CollectionPage = () => {
  const { name } = useParams()

  const navigate = useNavigate()

  const [selectItems, setSelectItem] = useState<string[]>([])

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const { loading: itemsLoading, getItems } = useGetItemsLazy()
  const { loading, setItemsToCollection } = useAddItemsToCollection()
  const { loading: collectionItemsLoading, getCollectionItems } =
    useGetCollectionItems()
  const { loading: loadingCollectionImages, getCollectionWithImages } =
    useCollectionWithImages()

  const items = useSelector(
    ({
      items: {
        data: { items }
      }
    }: RootState) => items
  )

  const collectionItems = useSelector(
    ({ collection: { data } }: RootState) => data
  )

  const itemsToAdd = useMemo(() => {
    return items.filter(
      ({ collections }) => collections === null || !collections.includes(name)
    )
  }, [items, name])

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))
  }

  const onSelectItem = (id: string) => {
    if (isSelect(id)) {
      setSelectItem((state) => state.filter((item) => item !== id))

      return
    }
    setSelectItem((state) => [...state, id])
  }

  const isSelect = (id: string) => {
    return selectItems.includes(id)
  }

  const onAddIconClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "add-to-collection" }))
  }

  const onAddItemsToCollection = () => {
    if (
      loading ||
      itemsLoading ||
      loadingCollectionImages ||
      collectionItemsLoading
    ) {
      return
    }

    setItemsToCollection(selectItems, name)
      .then(() => {
        return Promise.all([
          getItems(),
          getCollectionWithImages(name),
          getCollectionItems(name)
        ])
      })
      .then(() => {
        onPopupClose()
      })
  }

  return (
    <>
      <div className="extensions-wisher-collection-page">
        <div className="extensions-wisher-collection-page__header">
          <Button
            btnType="icon"
            onClickFn={() => navigate("/wisher/wishes/wishes-collections")}>
            <ArrowLeftSvgIcon />
          </Button>

          <Button onClickFn={onAddIconClick} btnType="icon">
            <img width={24} height={24} src={addSvgIcon} alt="add" />
          </Button>
        </div>

        <div className="extensions-wisher-collection-page__info">
          <h2 className="extensions-wisher-collection-page__title">{name}</h2>
        </div>

        {collectionItems.length === 0 ? (
          <WisherCollectionEmpty />
        ) : (
          <Wishes wishes={collectionItems} />
        )}
      </div>

      <Popup
        title="0 wishes selected"
        hasPopup={hasMessage === "add-to-collection"}
        onCloseClick={onPopupClose}>
        <p>Select wishes you want to add to this collection</p>

        <div className="extensions-wisher-collection-page__items">
          {itemsToAdd.map((wish) => (
            <WisherSelect
              key={wish.id}
              wish={wish}
              selected={isSelect(wish.id)}
              onSelectFn={onSelectItem}
            />
          ))}
        </div>

        <div className="extensions-wisher-collection-page__action">
          <Button
            size="md"
            btnColor="primary"
            onClickFn={onAddItemsToCollection}>
            <div className="extensions-wisher-collection-page__btn-content">
              <span>add to {name} </span>

              <Loader
                size={5.5}
                isLoading={
                  loading ||
                  itemsLoading ||
                  loadingCollectionImages ||
                  collectionItemsLoading
                }
              />
            </div>
          </Button>
        </div>
      </Popup>
    </>
  )
}
