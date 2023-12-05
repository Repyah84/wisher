import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import type { Item } from "~gql/types/graphql"
import { setItem } from "~store/slices/item"
import type { RootState } from "~store/wisher.store"
import { Wisher } from "~views/components/wisher/wisher"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

interface Props {
  wish: Item
}

export const WisherItem = ({ wish }: Props) => {
  const dispatch = useDispatch()

  const ref = useRef(null)

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const wishState = useSelector(({ item: { data } }: RootState) => data)

  const onItemClick = () => {
    dispatch(setItem(wish))

    navigateAndSetRedirect(`/wisher-item`)
  }

  useEffect(() => {
    if (wishState === null || ref === null) {
      return
    }

    const attributeValue = ref.current.getAttribute("id")

    if (attributeValue === wishState.id) {
      ref.current.scrollIntoView({ behavior: "instant", block: "center" })

      dispatch(setItem(null))
    }
  }, [])

  return (
    <div
      ref={ref}
      id={wish.id}
      onClick={onItemClick}
      className="extension-wisher-item-wrapper">
      <Wisher wish={wish} />
    </div>
  )
}
