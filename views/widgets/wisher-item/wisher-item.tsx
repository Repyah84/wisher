import { useDispatch } from "react-redux"

import type { Item } from "~gql/types/graphql"
import { setItem } from "~store/slices/item"
import { Wisher } from "~views/components/wisher/wisher"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

interface Props {
  wish: Item
}

export const WisherItem = ({ wish }: Props) => {
  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const onItemClick = () => {
    dispatch(setItem(wish))

    navigateAndSetRedirect(`/wisher-item`)
  }

  return (
    <div onClick={onItemClick} className="extension-wisher-item-wrapper">
      <Wisher wish={wish} />
    </div>
  )
}
