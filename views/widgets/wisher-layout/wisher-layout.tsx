import getSymbolFromCurrency from "currency-symbol-map"
import imageGarage from "data-base64:~assets/garage.png"
import { useContext } from "react"
import { useDispatch } from "react-redux"

import type { User } from "~gql/types/graphql"
import { patchWisherState, type WisherSearchData } from "~store/slices/wisher"
import { Button } from "~views/components/button/button"
import { Label } from "~views/components/label/label"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { WisherRating } from "~views/components/rating/rating"
import { Slider } from "~views/components/slider/slider"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useSelectCollection } from "~views/hooks/select-collection"

import { CollectionSettingsSelect } from "../collection-settings-select/collection-settings-select"

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
    input: { title, currency, price, personalRating, collections, imageUrl },
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

  const priceValue = `${getSymbolFromCurrency(currency)}${price}`

  const { selectedCollections, onSelectCollection } =
    useSelectCollection(collections)

  const onPopupClose = () => {
    setWisherState((wisher) => ({ ...wisher, hasMessage: null }))

    dispatch(patchWisherState({ collections: selectedCollections }))
  }

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
          <Slider images={images} />
        )}

        <WisherRating rating={personalRating} onRatingChange={onRatingChange}>
          <span className="extensions-wisher-layout__rating-title">
            Personal Rating
          </span>
        </WisherRating>

        <Label
          title="All"
          labelType="active"
          onLabelClick={onAllCollectionClick}
        />

        <p className="extensions-wisher-layout__name">{title}</p>

        {priceValue && (
          <span className="extensions-wisher-layout__price">{priceValue}</span>
        )}

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
