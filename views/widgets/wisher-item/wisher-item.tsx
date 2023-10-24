import { useNavigate } from "react-router-dom"

import type { Item } from "~gql/types/graphql"
import { Wisher } from "~views/components/wisher/wisher"

interface Props {
  wish: Item
}

export const WisherItem = ({ wish }: Props) => {
  const navigate = useNavigate()

  const onItemClick = () => {
    navigate(`/wisher-item/${wish.id}`)
  }

  return (
    <div onClick={onItemClick} className="extension-wisher-item-wrapper">
      <Wisher wish={wish} />
    </div>
  )
}
