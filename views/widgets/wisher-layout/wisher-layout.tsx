import imageGarage from "data-base64:~assets/garage.png"
import { useContext } from "react"
import { useDispatch } from "react-redux"

import type { User } from "~gql/types/graphql"
import { patchWisherState, type WisherSearchData } from "~store/slices/wisher"
import { Button } from "~views/components/button/button"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { RatingSimple } from "~views/components/rating-simple/rating-simple"
import { RatingTitle } from "~views/components/rating-title/rating-title"
import { Slider } from "~views/components/slider/slider"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useItemPrice } from "~views/hooks/item-price"
import { useSelectCollection } from "~views/hooks/select-collection"

import { CollectionSettingsSelect } from "../collection-settings-select/collection-settings-select"
import { ItemCollection } from "../item-collections/item-collections"

interface Props {
  user: User
  data: WisherSearchData
  isLoading: boolean
  onSaveClick: () => void
  onEditClick: () => void
}

export const WisherLayout = ({
  data: {
    imageUpload,
    input: { title, currency, price, personalRating, collectionIds, imageUrl },
    images
  },
  isLoading,
  onSaveClick,
  onEditClick
}: Props) => {
  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const dispatch = useDispatch()

  const { selectedCollections, onSelectCollection } =
    useSelectCollection(collectionIds)

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    dispatch(patchWisherState({ collectionIds: selectedCollections }))
  }

  const onImageChange = (index: number) => {
    dispatch(patchWisherState({ imageUrl: images[index] }))
  }

  const priceValue = useItemPrice(price, currency)

  const onRatingChange = (personalRating: number) => {
    dispatch(patchWisherState({ personalRating }))
  }

  const onAllCollectionClick = () => {
    setWisherState((wisher) => ({
      ...wisher,
      hasMessage: "collection-list-short"
    }))
  }

  return (
    <>
      <div className="extensions-wisher-layout">
        {imageUpload || !images || images.length === 0 ? (
          <img
            src={
              imageUpload
                ? URL.createObjectURL(imageUpload)
                : imageUrl || imageGarage
            }
            width={192}
            height={192}
            alt="Garage"
            style={{
              objectFit: "contain"
            }}
          />
        ) : (
          <Slider
            image={imageUrl}
            images={images}
            onImageChange={onImageChange}
          />
        )}

        <div className="extensions-wisher-layout__rating">
          <span className="extensions-wisher-layout__rating-title">
            Level of desire
          </span>

          <RatingSimple
            rating={personalRating}
            onRatingChange={onRatingChange}
          />

          <div className="extensions-wisher-layout__title-wrapper">
            {personalRating === 0 ? (
              <span className="extensions-wisher-layout__default-rating-title">
                Tap to specify your desired strength
              </span>
            ) : (
              <RatingTitle rating={personalRating} />
            )}
          </div>
        </div>

        <div className="extensions-wisher-layout__collections">
          <ItemCollection
            actionTitle="All"
            labelType="active"
            onAddClickFn={onAllCollectionClick}
            onCollectionItemClick={onAllCollectionClick}
            collectionsIds={selectedCollections}
          />
        </div>

        <p className="extensions-wisher-layout__name">{title}</p>

        <span className="extensions-wisher-layout__price">{priceValue}</span>

        <div className="extensions-wisher-layout__action">
          <Button size="md" onClickFn={onEditClick}>
            EDIT
          </Button>

          <Button btnColor="primary" size="md" onClickFn={onSaveClick}>
            <div className="extensions-wisher-layout__save-btn-content">
              <span>SAVE</span>

              <Loader size={5.5} isLoading={isLoading} />
            </div>
          </Button>
        </div>
      </div>

      <Popup
        hasPopup={hasMessage === "collection-list-short"}
        title="Add to collection"
        onCloseClick={onPopupClose}>
        <CollectionSettingsSelect
          collectionSelected={selectedCollections}
          onSelectCollection={onSelectCollection}
        />
      </Popup>
    </>
  )
}
