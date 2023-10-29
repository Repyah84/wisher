import addSvgIcon from "data-base64:~assets/circle-croos.svg"
import sortSvgIcon from "data-base64:~assets/sort.svg"
import { useContext, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { useGetCollectionItems } from "~gql/hooks/collection-items"
import { useAddItemsToCollection } from "~gql/hooks/collection-items.mutate"
import { useCollectionWithImages } from "~gql/hooks/collection-with-images"
import { useCollectionUpdate } from "~gql/hooks/collection.mutate"
import { useGetItemsLazy } from "~gql/hooks/items"
import { updateUserCollectionName } from "~store/slices/user"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { OptionsSvgIcon } from "~views/components/icons/options/options"
import { InfiniteScroll } from "~views/components/infinite-scroll/infinite-scroll"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { SettingsItem } from "~views/components/settings-item/settings-item"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { AddForm } from "~views/widgets/add-form/add-form"
import { WisherSelect } from "~views/widgets/wisher-select/wisher-select"
import { WisherCollectionEmpty } from "~views/widgets/wishes-collection-empty/wishes-collection-empty"
import { Wishes } from "~views/widgets/wishes/wishes"

export const CollectionPage = () => {
  const { name } = useParams()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [collectionName, setCollectionName] = useState(name)
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
  const { loading: updateCollectionLoading, updateCollectionName } =
    useCollectionUpdate()

  const collections = useSelector(
    ({ user: { data } }: RootState) => data.collections
  )
  const itemsData = useSelector(({ items: { data } }: RootState) => data)
  const collectionItems = useSelector(
    ({ collection: { data } }: RootState) => data
  )

  const itemsToAdd = useMemo(() => {
    return itemsData.items.filter(
      ({ collections }) =>
        collections === null || !collections.includes(collectionName)
    )
  }, [itemsData, name])

  const repeatWhen = useMemo(() => {
    return { value: itemsData.items.length !== itemsData.count }
  }, [itemsData])

  const isSelect = (id: string) => {
    return selectItems.includes(id)
  }

  const isLoading = () =>
    loading || itemsLoading || loadingCollectionImages || collectionItemsLoading

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

  const onAddIconClick = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: "add-to-collection" }))
  }

  const onAddItemsToCollection = () => {
    if (isLoading()) {
      return
    }

    setItemsToCollection(selectItems, collectionName)
      .then(() => {
        return Promise.all([
          getItems(10, true),
          getCollectionWithImages(collectionName),
          getCollectionItems(collectionName, 10, true)
        ])
      })
      .then(() => {
        onPopupClose()
      })
  }

  const onSettingsClick = () => {
    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: "collection-settings"
    }))
  }

  const onRenameCollection = () => {
    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: "collection-update-name"
    }))
  }

  const onUpdateCollectionName = (newCollection: string) => {
    const updateDate = { newCollection, oldCollection: collectionName }

    updateCollectionName(updateDate).then(() => {
      dispatch(updateUserCollectionName(updateDate))

      setCollectionName(newCollection)

      onPopupClose()
    })
  }

  const onDeleteCollection = () => {
    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: "collection-delete"
    }))
  }

  const observerEventAddItems = () => {
    if (itemsLoading || itemsData.items.length === itemsData.count) {
      return
    }

    const lastItemId = itemsData.items[itemsData.items.length - 1].id

    getItems(10, false, lastItemId)
  }

  const observerEventCollectionItems = () => {
    if (
      collectionItemsLoading ||
      collectionItems.items.length === collectionItems.count
    ) {
      return
    }

    const lastItemId =
      collectionItems.items[collectionItems.items.length - 1].id

    getCollectionItems(collectionName, 10, false, lastItemId)
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

            <Button onClickFn={onSettingsClick} btnType="icon">
              <OptionsSvgIcon />
            </Button>
          </div>
        </div>

        <div className="extensions-wisher-collection-page__info">
          <h2 className="extensions-wisher-collection-page__title">
            {collectionName}
          </h2>

          <div className="extensions-wisher-collection-page__details">
            <span>{collectionItems.count} Items</span>
          </div>
        </div>

        {collectionItems.items.length === 0 ? (
          <WisherCollectionEmpty />
        ) : (
          <InfiniteScroll
            loading={collectionItemsLoading}
            observerEventFn={observerEventCollectionItems}>
            <Wishes wishes={collectionItems.items} />
          </InfiniteScroll>
        )}
      </div>

      <Popup
        title={`${selectItems.length} wishes selected`}
        hasPopup={hasMessage === "add-to-collection"}
        onCloseClick={onPopupClose}>
        <p className="extensions-wisher-collection-page__description">
          Select wishes you want to add to this collection
        </p>

        <InfiniteScroll
          height="400px"
          repeatWhen={repeatWhen}
          observerEventFn={observerEventAddItems}>
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
        </InfiniteScroll>

        <div className="extensions-wisher-collection-page__action">
          <Button
            size="md"
            btnColor="primary"
            disable={selectItems.length === 0}
            onClickFn={onAddItemsToCollection}>
            <div className="extensions-wisher-collection-page__btn-content">
              <span>add to {collectionName} </span>

              <Loader size={5.5} isLoading={isLoading()} />
            </div>
          </Button>
        </div>
      </Popup>

      <Popup
        title="collection-settings"
        hasPopup={hasMessage === "collection-settings"}
        onCloseClick={onPopupClose}>
        <div className="extensions-wisher-collection-page__settings">
          <SettingsItem onClickFn={onRenameCollection}>
            <span>Rename</span>
          </SettingsItem>

          <SettingsItem onClickFn={onDeleteCollection}>
            <span>Delete</span>
          </SettingsItem>
        </div>
      </Popup>

      <Popup
        title="Rename the collection"
        hasPopup={hasMessage === "collection-update-name"}
        onCloseClick={onPopupClose}>
        <AddForm
          btnTitle="rename"
          loading={updateCollectionLoading}
          collections={collections}
          onSubmitFn={onUpdateCollectionName}
        />
      </Popup>
    </>
  )
}
