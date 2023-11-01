import { useContext, useMemo, useState } from "react"
import { useSelector } from "react-redux"

import type { ItemInput } from "~gql/types/graphql"
import type { WisherSearchData } from "~store/slices/wisher"
import type { RootState } from "~store/wisher.store"
import { Button } from "~views/components/button/button"
import { ImageUploader } from "~views/components/image-upload/image-upload"
import { Input } from "~views/components/input/input"
import { Loader } from "~views/components/loader/loader"
import { Popup } from "~views/components/popup/popup"
import { Rating } from "~views/components/rating/rating"
import { Select } from "~views/components/select/select"
import { Textarea } from "~views/components/textarea/textarea"
import { WishImage } from "~views/components/wish-image/wish-image"
import { WisherStateContext } from "~views/context/wisher/wisher.context"

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

  const user = useSelector(({ user: data }: RootState) => data)

  const [edit, setEdit] = useState<ItemInput>(data.input)

  const [selectedCollections, setSelectedCollections] = useState<string[]>(
    edit.collections || []
  )

  const [imageUpload, setImageUpload] = useState<File | null>(
    data.imageUpload ?? null
  )

  const uploadImage = useMemo(() => {
    return imageUpload ? URL.createObjectURL(imageUpload) : data.input.imageUrl
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

    change({ collections: selectedCollections })
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          onSaveClick({ ...data, imageUpload, input: edit })
        }}
        className="extensions-wisher-edit-form">
        <div className="extensions-wisher-edit-form__content">
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
                  collections={selectedCollections}
                  onAddClickFn={onLabelAllCollectionClick}
                />
              </div>
            )}

            <Input
              value={edit.title}
              onChangeValue={(value) => change({ title: value })}
              placeholder="Add gift title (required)"
              title="Wish title*"
            />

            <Rating
              rating={edit.personalRating}
              onRatingChange={(value) => change({ personalRating: value })}>
              <span className="extensions-wisher-edit-form__item-title">
                Personal rating
              </span>
            </Rating>

            <div className="extensions-wisher-edit-form__price">
              <Input
                value={edit.price}
                type="number"
                onChangeValue={(value) => change({ price: parseFloat(value) })}
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

            <Textarea
              title="Notes"
              placeholder="Size, color, amount, etc."
              value={edit.note || ""}
              onValueChange={(value) => change({ note: value })}
            />
          </div>
        </div>

        <div className="extensions-wisher-edit-form__action">
          <Button
            size="md"
            type="submit"
            btnColor="primary"
            onClickFn={() => undefined}>
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
