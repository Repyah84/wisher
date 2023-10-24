import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { WishesCollectionsEmpty } from "~views/widgets/wishes-collections-empty/wishes-collections-empty"

export const WishesCollectionsPage = () => {
  const collections = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  console.log(collections)

  return (
    <div className="extensions-wisher-wishes-collections-page">
      {collections === null ? <WishesCollectionsEmpty /> : <></>}
    </div>
  )
}
