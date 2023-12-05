import { useContext, useMemo, useRef, useState } from "react"
import { useSelector } from "react-redux"

import type { ItemInput } from "~gql/types/graphql"
import type { WisherSearchData } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { ArrowLeftSvgIcon } from "~views/components/icons/arrow-left/arrow-left"
import { ImageUploader } from "~views/components/image-upload/image-upload"
import { Input } from "~views/components/input/input"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { WisherRating } from "~views/components/rating/rating"
import { Select } from "~views/components/select/select"
import { Textarea } from "~views/components/textarea/textarea"
import { WishImage } from "~views/components/wish-image/wish-image"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useAutoScroll } from "~views/hooks/auto-scroll"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { useSelectCollection } from "~views/hooks/select-collection"

import { CollectionSettingsSelect } from "../collection-settings-select/collection-settings-select"
import { ItemCollection } from "../item-collections/item-collections"

interface Props {
  data: WisherSearchData
  onSaveClick: (data: WisherSearchData) => void
  loading?: boolean
}

export const EditForm = ({ data, onSaveClick, loading = false }: Props) => {
  const {
    wisherSate: { hasMessage },
    setWisherState
  } = useContext(WisherStateContext)

  const { navigateWithRedirect } = useNavigateWithRedirect()

  const ref = useRef(null)

  useAutoScroll(ref)

  const user = useSelector(({ user: data }: RootState) => data)

  const [edit, setEdit] = useState<ItemInput>(data.input)

  const { selectedCollections, onSelectCollection } = useSelectCollection(
    edit.collectionIds
  )

  const requiredValidator = useMemo(() => {
    const value = edit.title

    return value === null || value === undefined || value.trim() === ""
  }, [edit.title])

  const minValidator = useMemo(() => {
    const value = edit.price

    return value <= 0 || value === undefined || value === null
  }, [edit.price])

  const [imageUpload, setImageUpload] = useState<File | null>(
    data.imageUpload ?? null
  )

  const uploadImage = useMemo(() => {
    return imageUpload ? URL.createObjectURL(imageUpload) : edit.imageUrl
  }, [imageUpload, data])

  const change = (value: Partial<ItemInput>) => {
    setEdit((data) => partial(data, value))
  }

  const partial = (data: ItemInput, value: Partial<ItemInput>) => {
    return { ...data, ...value }
  }

  const onLabelAllCollectionClick = () => {
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

    change({ collectionIds: selectedCollections })
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (loading || requiredValidator || minValidator) {
      return
    }

    onSaveClick({ ...data, imageUpload, input: edit })
  }

  return (
    <>
      <form onSubmit={onSubmitForm} className="extensions-wisher-edit-form">
        <div className="extensions-wisher-edit-form__content">
          <div className="extensions-wisher-edit-form__nav">
            <Button
              btnType="icon"
              onClickFn={() => navigateWithRedirect("/wisher-item")}>
              <ArrowLeftSvgIcon />
            </Button>

            <Button
              disable={requiredValidator}
              type="submit"
              size="md"
              btnType="stroke"
              btnColor="primary">
              <span>SAVE</span>
            </Button>
          </div>

          <div className="extensions-wisher-edit-form__item-image">
            <WishImage image={uploadImage} />

            <ImageUploader
              title="Change image"
              onImageChange={setImageUpload}
            />
          </div>

          <div className="extensions-wisher-edit-form__fields">
            {user !== null && (
              <div className="extensions-wisher-edit-form__collections">
                <ItemCollection
                  actionTitle="Add to collection"
                  collectionsIds={selectedCollections}
                  onAddClickFn={onLabelAllCollectionClick}
                />
              </div>
            )}

            <Input
              value={edit.title}
              errorMessage={requiredValidator && "Title is required"}
              onChangeValue={(value) => change({ title: value })}
              placeholder="Add gift title"
              title="Wish title*"
            />

            <WisherRating
              rating={edit.personalRating}
              onRatingChange={(value) => change({ personalRating: value })}>
              <span className="extensions-wisher-edit-form__item-title">
                Personal rating
              </span>
            </WisherRating>

            <div className="extensions-wisher-edit-form__price">
              <Input
                value={edit.price}
                type="number"
                errorMessage={minValidator && "Value must be greater than zero"}
                onChangeValue={(value) =>
                  change({ price: parseFloat(value === "" ? "0" : value) })
                }
                placeholder="Add item price"
                title="price"
              />

              <Select
                title="Currency"
                selected={edit.currency}
                onSelected={(value) => change({ currency: value })}
              />
            </div>

            <Input
              value={edit.url}
              onChangeValue={(value) => change({ url: value })}
              placeholder="Add seller’s website URL"
              title="url"
            />

            <div ref={ref} className="extensions-wisher-edit-form__wrapper">
              <Textarea
                title="Notes"
                placeholder="Size, color, amount, etc."
                value={edit.note || ""}
                onValueChange={(value) => change({ note: value })}
              />
            </div>
          </div>
        </div>

        <div className="extensions-wisher-edit-form__action">
          <Button
            disable={requiredValidator || minValidator}
            size="md"
            type="submit"
            btnColor="primary">
            <div className="extensions-wisher-edit-form__action-content">
              <span>SAVE</span>

              <Loader size={5.5} isLoading={loading} />
            </div>
          </Button>
        </div>
      </form>

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
