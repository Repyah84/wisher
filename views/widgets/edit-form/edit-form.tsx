import { useState } from "react"

import type { ItemInput } from "~gql/types/graphql"
import type { WisherSearchData } from "~store/slices/wisher"
import { Button } from "~views/components/button/button"
import { ImageUploader } from "~views/components/image-upload/image-upload"
import { Input } from "~views/components/input/input"
import { Rating } from "~views/components/rating/rating"
import { Select } from "~views/components/select/select"
import { Textarea } from "~views/components/textarea/textarea"

interface Props {
  data: WisherSearchData
  onSaveClick: (data: WisherSearchData) => void
}

export const EditForm = ({ data, onSaveClick }: Props) => {
  const [edit, setEdit] = useState<ItemInput>(data.input)

  const [imageUpload, setImageUpload] = useState<File | undefined>()

  const change = (value: Partial<ItemInput>) => {
    setEdit((data) => partial(data, value))
  }

  const partial = (data: ItemInput, value: Partial<ItemInput>) => {
    return { ...data, ...value }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        onSaveClick({ ...data, imageUpload, input: edit })
      }}
      className="extensions-wisher-edit-form">
      <div className="extensions-wisher-edit-form__content">
        <ImageUploader image={edit.imageUrl} onImageChange={setImageUpload} />

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
          value={edit.note}
          onValueChange={(value) => change({ note: value })}
        />
      </div>

      <div className="extensions-wisher-edit-form__action">
        <Button
          size="md"
          type="submit"
          btnColor="primary"
          onClickFn={() => undefined}>
          SAVE
        </Button>
      </div>
    </form>
  )
}
