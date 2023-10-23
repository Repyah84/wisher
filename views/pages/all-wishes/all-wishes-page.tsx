import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { WishesEmpty } from "~views/widgets/wishes-empty/wishes-empty"
import { Wishes } from "~views/widgets/wishes/wishes"

export const AllWishesPage = () => {
  const allWishes = useSelector(({ items: { data } }: RootState) => data)

  console.log("@@@@@@@@@@@@@@@@@", allWishes[0].__typename)

  return (
    <div className="extensions-wisher-all-wishes-page">
      {allWishes === null || allWishes.length === 0 ? (
        <WishesEmpty />
      ) : (
        <Wishes wishes={allWishes} />
      )}
    </div>
  )
}
