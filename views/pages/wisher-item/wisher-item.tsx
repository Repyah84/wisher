import circleSvg from "data-base64:~assets/circle.svg"
import noteSvg from "data-base64:~assets/note.svg"
import { useContext, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useItemMutate } from "~gql/hooks/item.mutate"
import { OpenShop } from "~helpers/open-shop"
import { updateItemCollection } from "~store/actions/update-item-collections"
import { resetCollectionsWithImages } from "~store/slices/collections-with-images"
import { toggleUpdateItemCollection } from "~store/slices/loading"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { WishDate } from "~views/components/date/date"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { OptionsSvgIcon } from "~views/components/icons/options/options"
import { ShareSvgIcon } from "~views/components/icons/share/share"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { WisherRating } from "~views/components/rating/rating"
import { WishImage } from "~views/components/wish-image/wish-image"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useItemPrice } from "~views/hooks/item-price"
import { useItemRootData } from "~views/hooks/item-root-data"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { useSelectCollection } from "~views/hooks/select-collection"
import { CollectionSettingsSelect } from "~views/widgets/collection-settings-select/collection-settings-select"
import { Header } from "~views/widgets/header/header"
import { ItemCollection } from "~views/widgets/item-collections/item-collections"

export const WisherItemPage = () => {
  const dispatch = useDispatch()

  const { loading: itemLoading, addItem } = useItemMutate()

  const { navigateAndSetRedirect, navigateWithRedirect } =
    useNavigateWithRedirect()

  const loading = useSelector(({ loading: { data } }: RootState) => data)

  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const {
    id,
    imageUrl,
    currency,
    note,
    title,
    personalRating,
    createdAt,
    faviconUrl,
    marketplace,
    price,
    collectionIds,
    url
  } = useItemRootData()

  const { selectedCollections, onSelectCollection } =
    useSelectCollection(collectionIds)

  const priceValue = useItemPrice(price, currency)

  const noteValue = useMemo(() => {
    return note.split("\n").map((not, index) => (
      <p key={index} className="extension-wisher-item__note">
        {not}
      </p>
    ))
  }, [note])

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

  const onPopupWithCollectionClose = () => {
    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: null
    }))

    if (
      collectionIds !== null &&
      collectionIds.toString() === selectedCollections.toString()
    ) {
      return
    }

    dispatch(toggleUpdateItemCollection(true))

    addItem({ input: { id, collectionIds: selectedCollections } }).then(() => {
      const data = {
        itemId: id,
        collectionIds: selectedCollections
      }

      dispatch(updateItemCollection(data))
      dispatch(resetCollectionsWithImages())

      dispatch(toggleUpdateItemCollection(false))
    })
  }

  const onShopClick = () => {
    OpenShop(url)
  }

  const onShareIconClick = () => {
    window.navigator.clipboard.writeText(url).then(() => {
      setWisherState((wisher) => ({
        ...wisher,
        snackbar: {
          title: "The URL has been copied",
          action: false
        }
      }))
    })
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

              <Button size="md" btnType="icon" onClickFn={onShareIconClick}>
                <ShareSvgIcon />
              </Button>
            </div>
          </div>

          <div className="extension-wisher-item__pudding-wrap">
            <div className="extension-wisher-item__create-info">
              <WishDate clear={true} date={createdAt}>
                <span>Saved: </span>
              </WishDate>

              <WisherRating size={20} rating={personalRating} />
            </div>

            <div className="extension-wisher-item__collections">
              <ItemCollection
                actionTitle="Add to collection"
                loading={itemLoading}
                collectionsIds={collectionIds}
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

              <Button btnType="stroke" onClickFn={onShareIconClick}>
                <div className="extension-wisher-item__link">
                  <span>Share</span>

                  <ShareSvgIcon />
                </div>
              </Button>
            </div>

            <div
              className="extension-wisher-item__notes"
              onClick={() =>
                navigateAndSetRedirect(`/wisher-item-edit`, "notes")
              }>
              <div className="extension-wisher-item__notes-header">
                <span>NOTES</span>

                <span>(CLICK TO EDIT)</span>
              </div>

              <div>{noteValue}</div>
            </div>
          </div>
        </main>

        <footer className="extension-wisher-item__footer">
          <Button size="md" btnColor="primary" onClickFn={onShopClick}>
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
