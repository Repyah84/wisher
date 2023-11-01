import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"

export const useItemRootData = () => {
  const item = useSelector(({ item: { data } }: RootState) => data)

  return item
}
