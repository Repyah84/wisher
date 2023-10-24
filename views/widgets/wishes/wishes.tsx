import { memo } from "react"

import type { Item } from "~gql/types/graphql"

import { WisherItem } from "../wisher-item/wisher-item"

interface Props {
  wishes: Item[]
}

export const Wishes = ({ wishes }: Props) => {
  return (
    <div className="extensions-wisher-wishes">
      {wishes.map((item) => (
        <WisherItem key={item.id} wish={item} />
      ))}
    </div>
  )
}
