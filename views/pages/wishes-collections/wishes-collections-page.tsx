import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { WishesCollectionsEmpty } from "~views/widgets/wishes-collections-empty/wishes-collections-empty"
import { WishesCollections } from "~views/widgets/wishes-collections/wishes-collections"

export const WishesCollectionsPage = () => {
  const collections = useSelector(
    ({
      user: {
        data: { collections }
      }
    }: RootState) => collections
  )

  return (
    <div className="extensions-wisher-wishes-collections-page">
      {collections.length === 0 ? (
        <WishesCollectionsEmpty />
      ) : (
        <WishesCollections collections={collections} />
      )}
    </div>
  )
}
