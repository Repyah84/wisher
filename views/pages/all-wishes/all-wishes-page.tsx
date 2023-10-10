import { WishesEmpty } from "~views/widgets/wishes-empty/wishes-empty"

export const AllWishesPage = () => {
  const allWishes = null

  return (
    <div className="extensions-wisher-all-wishes-page">
      {allWishes === null ? <WishesEmpty /> : <></>}
    </div>
  )
}
