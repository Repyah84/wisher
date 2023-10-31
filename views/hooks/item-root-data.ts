import { useMemo } from "react"
import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"

export const useItemRootData = (itemId: string) => {
  const items = useSelector(({ items: { data } }: RootState) => data.items)
  const collectionItems = useSelector(
    ({ collection: { data } }: RootState) => data.items
  )
  const searchItems = useSelector(
    ({ search: { data } }: RootState) => data.items
  )

  const item = useMemo(() => {
    return (
      items.find(({ id }) => itemId === id) ||
      collectionItems.find(({ id }) => itemId === id) ||
      searchItems.find(({ id }) => itemId === id) ||
      {}
    )
  }, [items, collectionItems, searchItems])

  return item
}
