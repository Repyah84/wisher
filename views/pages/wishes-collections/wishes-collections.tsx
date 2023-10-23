import { WishesCollectionsEmpty } from "~views/widgets/wishes-collections-empty/wishes-collections-empty"

export const WishesCollectionsPage = () => {
  const collections = null

  return (
    <div className="extensions-wisher-wishes-collections-page">
      {collections === null ? <WishesCollectionsEmpty /> : <></>}
    </div>
  )
}
