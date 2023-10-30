import getSymbolFromCurrency from "currency-symbol-map"
import circleSvg from "data-base64:~assets/circle.svg"
import noteSvg from "data-base64:~assets/note.svg"
import { useContext, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { useItemMutate } from "~gql/hooks/item.mutate"
import { resetCollectionsWithImages } from "~store/slices/collections-with-images"
import { updateItemsCollectionState } from "~store/slices/items"
import { toggleUpdateItemCollection } from "~store/slices/loading"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { WishDate } from "~views/components/date/date"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { OptionsSvgIcon } from "~views/components/icons/options/options"
import { ShareSvgIcon } from "~views/components/icons/share/share"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { Rating } from "~views/components/rating/rating"
import { WishImage } from "~views/components/wish-image/wish-image"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { CollectionSettingsSelect } from "~views/widgets/collection-settings-select/collection-settings-select"
import { Header } from "~views/widgets/header/header"
import { ItemCollection } from "~views/widgets/item-collections/item-collections"

export const WisherItemPage = () => {
  const { itemId } = useParams()

  const dispatch = useDispatch()

  const { loading: itemLoading, addItem } = useItemMutate()

  const { navigate, navigateWithRedirect } = useNavigateWithRedirect()

  const loading = useSelector(({ loading: { data } }: RootState) => data)

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const items = useSelector(({ items: { data } }: RootState) => data.items)

  const {
    imageUrl,
    currency,
    note,
    title,
    personalRating,
    createdAt,
    faviconUrl,
    marketplace,
    price,
    collections
  } = useMemo(() => {
    return items.find(({ id }) => itemId === id)
  }, [itemId, items])

  const [selectedCollections, setSelectedCollections] =
    useState<string[]>(collections)

  const priceValue = useMemo(
    () => `${getSymbolFromCurrency(currency)}${price}`,
    [price, currency]
  )

  const onSettingClick = () => {
    if (loading.marcUsPurchased) {
      return
    }

    setWisherState((wisher) => ({ ...wisher, hasMessage: "item-setting" }))
  }

  const onLabelAllCollectionClick = () => {
    if (itemLoading) {
      return
    }

    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: "collection-list-short"
    }))
  }

  const onSelectCollection = (collectionName: string) => {
    setSelectedCollections((collections) => {
      if (selectedCollections.includes(collectionName)) {
        return collections.filter((name) => name !== collectionName)
      }

      return [...collections, collectionName]
    })
  }

  const onPopupWithCollectionClose = () => {
    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: null
    }))

    if (collections.toString() === selectedCollections.toString()) {
      return
    }

    dispatch(toggleUpdateItemCollection(true))

    addItem({ input: { id: itemId, collections: selectedCollections } }).then(
      () => {
        dispatch(
          updateItemsCollectionState({
            itemId,
            collections: selectedCollections
          })
        )
        dispatch(resetCollectionsWithImages())
        dispatch(toggleUpdateItemCollection(false))
      }
    )
  }

  return (
    <>
      <div className="extension-wisher-item">
        <Header />

        <main className="extension-wisher-item__main">
          <div className="extension-wisher-item__image">
            <WishImage image={imageUrl} />

            <div className="extension-wisher-item__nav">
              <Button
                size="md"
                btnType="icon"
                onClickFn={() =>
                  navigateWithRedirect("/wisher/wishes/wishes-all")
                }>
                <ArrowLeftSvgIcon />
              </Button>

              <Button size="md" btnType="icon" onClickFn={onSettingClick}>
                {loading.marcUsPurchased ? (
                  <div className="extension-wisher-item__loader">
                    <Loader size={5} isLoading={true} />
                  </div>
                ) : (
                  <OptionsSvgIcon />
                )}
              </Button>
            </div>

            <div className="extension-wisher-item__public">
              <div className="extension-wisher-item__domain-info">
                <img
                  width={16}
                  height={16}
                  src={faviconUrl || circleSvg}
                  alt="Fav icon"
                />

                <span>{marketplace || "Domain without icon"}</span>
              </div>

              <Button size="md" btnType="icon" onClickFn={() => undefined}>
                <ShareSvgIcon />
              </Button>
            </div>
          </div>

          <div className="extension-wisher-item__pudding-wrap">
            <div className="extension-wisher-item__create-info">
              <WishDate date={createdAt} />

              <Rating itemWidth={20} rating={personalRating} />
            </div>

            <div className="extension-wisher-item__collections">
              <ItemCollection
                loading={itemLoading}
                collections={collections}
                onAddClickFn={onLabelAllCollectionClick}
              />
            </div>

            <p className="extension-wisher-item__title">{title}</p>

            <span className="extension-wisher-item__price">{priceValue}</span>

            <div className="extension-wisher-item__share">
              <div className="extension-wisher-item__share-item">
                <img width={24} height={24} src={noteSvg} alt="Note-img" />

                <span>View notes</span>
              </div>

              <Button btnType="stroke" onClickFn={() => undefined}>
                <div className="extension-wisher-item__link">
                  <span>Share</span>

                  <ShareSvgIcon />
                </div>
              </Button>
            </div>

            <div
              onClick={() => navigate(`/wisher-item-edit/${itemId}`)}
              className="extension-wisher-item__notes">
              <div className="extension-wisher-item__notes-header">
                <span>NOTES</span>

                <span>(CLICK TO EDIT)</span>
              </div>

              <p className="extension-wisher-item__note">{note || "..."}</p>
            </div>
          </div>
        </main>

        <footer className="extension-wisher-item__footer">
          <Button size="md" btnColor="primary" onClickFn={() => undefined}>
            <span>SHOP NOW</span>
          </Button>
        </footer>
      </div>

      <Popup
        hasPopup={hasMessage === "collection-list-short"}
        title="Add to collection"
        onCloseClick={onPopupWithCollectionClose}>
        <CollectionSettingsSelect
          collectionSelected={selectedCollections}
          onSelectCollection={onSelectCollection}
        />
      </Popup>
    </>
  )
}
