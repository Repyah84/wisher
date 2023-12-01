import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { useCollectionsState } from "~views/hooks/collections"
import { WishesCollectionsEmpty } from "~views/widgets/wishes-collections-empty/wishes-collections-empty"
import { WishesCollections } from "~views/widgets/wishes-collections/wishes-collections"

export const WishesCollectionsPage = () => {
  const { collections } = useCollectionsState()

  const user = useSelector(({ user: { data } }: RootState) => data)

  return (
    <div className="extensions-wisher-wishes-collections-page">
      {user === null || collections.length === 0 ? (
        <WishesCollectionsEmpty />
      ) : (
        <WishesCollections collections={collections} />
      )}
    </div>
  )
}
