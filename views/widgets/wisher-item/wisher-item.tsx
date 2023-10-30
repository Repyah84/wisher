import type { Item } from "~gql/types/graphql"
import { Wisher } from "~views/components/wisher/wisher"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

interface Props {
  wish: Item
}

export const WisherItem = ({ wish }: Props) => {
  const { navigate } = useNavigateWithRedirect()

  const onItemClick = () => {
    navigate(`/wisher-item/${wish.id}`)
  }

  return (
    <div onClick={onItemClick} className="extension-wisher-item-wrapper">
      <Wisher wish={wish} />
    </div>
  )
}
