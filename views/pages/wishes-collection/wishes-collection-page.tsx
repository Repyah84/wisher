import addSvgIcon from "data-base64:~assets/circle-croos.svg"
import sortSvgIcon from "data-base64:~assets/sort.svg"
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
import { OptionsSvgIcon } from "~views/components/icons/options/options"
import { InteractObserver } from "~views/components/interact-observer/interact-observer"
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

  const itemsData = useSelector(({ items: { data } }: RootState) => data)

  const collectionItems = useSelector(
    ({ collection: { data } }: RootState) => data
  )

  const itemsToAdd = useMemo(() => {
    return itemsData.items.filter(
      ({ collections }) => collections === null || !collections.includes(name)
    )
  }, [itemsData, name])

  const repeatWhen = useMemo(() => {
    return { value: itemsData.items.length !== itemsData.count }
  }, [itemsData])

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
          getItems(10, true),
          getCollectionWithImages(name),
          getCollectionItems(name, 10, true)
        ])
      })
      .then(() => {
        onPopupClose()
      })
  }

  const onObserverEventAddItems = () => {
    if (itemsLoading || itemsData.items.length === itemsData.count) {
      return
    }

    const lastItemId = itemsData.items[itemsData.items.length - 1].id

    getItems(10, false, lastItemId)
  }

  const onObserverEventCollectionItems = () => {
    if (
      collectionItemsLoading ||
      collectionItems.items.length === collectionItems.count
    ) {
      return
    }

    const lastItemId =
      collectionItems.items[collectionItems.items.length - 1].id

    getCollectionItems(name, 10, false, lastItemId)
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

          <div className="extensions-wisher-collection-page__tools">
            <Button onClickFn={onAddIconClick} btnType="icon">
              <img width={24} height={24} src={addSvgIcon} alt="add" />
            </Button>

            <Button btnType="icon">
              <img width={24} height={24} src={sortSvgIcon} alt="Option" />
            </Button>

            <Button btnType="icon">
              <OptionsSvgIcon />
            </Button>
          </div>
        </div>

        <div className="extensions-wisher-collection-page__info">
          <h2 className="extensions-wisher-collection-page__title">{name}</h2>

          <div className="extensions-wisher-collection-page__details">
            <span>{collectionItems.count} Items</span>
          </div>
        </div>

        {collectionItems.items.length === 0 ? (
          <WisherCollectionEmpty />
        ) : (
          <InteractObserver
            loading={collectionItemsLoading}
            observerEventFn={onObserverEventCollectionItems}>
            <Wishes wishes={collectionItems.items} />
          </InteractObserver>
        )}
      </div>

      <Popup
        title={`${selectItems.length} wishes selected`}
        hasPopup={hasMessage === "add-to-collection"}
        onCloseClick={onPopupClose}>
        <p className="extensions-wisher-collection-page__description">
          Select wishes you want to add to this collection
        </p>

        <InteractObserver
          height="400px"
          repeatWhen={repeatWhen}
          observerEventFn={onObserverEventAddItems}>
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
        </InteractObserver>

        <div className="extensions-wisher-collection-page__action">
          <Button
            size="md"
            btnColor="primary"
            disable={selectItems.length === 0}
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
