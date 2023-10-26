import { WishesCollection } from "~views/widgets/wishes-collection/wishes-collection"

interface Props {
  collections: string[]
}

export const WishesCollections = ({ collections }: Props) => {
  return (
    <div className="extensions-wisher-wishes-collection">
      <div className="extensions-wisher-wishes-collection__header"></div>

      <div className="extensions-wisher-wishes-collection__scroll-bar">
        {collections.map((name) => (
          <WishesCollection key={name} collectionName={name} />
        ))}
      </div>
    </div>
  )
}
