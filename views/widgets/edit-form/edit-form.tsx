import { useState } from "react"

import type { ItemInput } from "~gql/types/graphql"
import { Button } from "~views/components/button/button"
import { Input } from "~views/components/input/input"
import { Rating } from "~views/components/rating/rating"
import { Select } from "~views/components/select/select"

interface Props {
  data: ItemInput
  onSaveClick: (data: ItemInput) => void
}

export const EditForm = ({ data, onSaveClick }: Props) => {
  const [edit, setEdit] = useState<ItemInput>(data)

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

        onSaveClick(edit)
      }}
      className="extensions-wisher-edit-form">
      <div className="extensions-wisher-edit-form__content">
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

        {/* <Input
        value={title}
        onChangeValue={(value) => change({ note: value as string })}
        title="notes"
        type="tx"
      /> */}
      </div>

      <div className="extensions-wisher-edit-form__action">
        <Button type="submit" btnColor="primary" onClickFn={() => undefined}>
          SAVE
        </Button>
      </div>
    </form>
  )
}
