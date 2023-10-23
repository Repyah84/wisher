import { memo } from "react"

import type { Item } from "~gql/types/graphql"
import { Wisher } from "~views/components/wisher/wisher"

interface Props {
  wishes: Item[]
}

export const Wishes = ({ wishes }: Props) => {
  return (
    <div className="extensions-wisher-wishes">
      {wishes.map((item) => (
        <Wisher key={item.id} wish={item} />
      ))}
    </div>
  )
}
