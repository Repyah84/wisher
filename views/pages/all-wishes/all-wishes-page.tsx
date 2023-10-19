import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { WishesEmpty } from "~views/widgets/wishes-empty/wishes-empty"
import { WishesMemo } from "~views/widgets/wishes/wishes"

export const AllWishesPage = () => {
  const allWishes = useSelector((store: RootState) => store.items.data)

  console.log("AllWishesPage", allWishes)

  return (
    <div className="extensions-wisher-all-wishes-page">
      {allWishes === null ? <WishesEmpty /> : <WishesMemo wishes={allWishes} />}
    </div>
  )
}
