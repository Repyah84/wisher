import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useSelector } from "react-redux"

import type { RootState } from "~store/wisher.store"
import { Loader } from "~views/components/loader/loader"

import { WisherCollectionShort } from "../wishes-collection-short/wishes-collection-short"

interface Props {
  collectionSelected: string[]
  onSelectCollection: (collectionName: string) => void
}

export const CollectionSettingsSelect = ({
  collectionSelected,
  onSelectCollection
}: Props) => {
  const collections = useSelector(
    ({ user: { data } }: RootState) => data.collections
  )

  const collectionWithImages = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  const isLoad = collectionWithImages.length !== collections.length

  return (
    <div className="extensions-wisher-collection-settings-select">
      {isLoad && (
        <div className="extensions-wisher-collection-settings-select__loader">
          <Loader isLoading={true} />
        </div>
      )}

      {!collections || collections.length === 0 ? (
        <div className="extensions-wisher-collection-settings-select__empty">
          <img width={104} height={104} src={svgIcon} alt="empty" />

          <h3 className="extensions-wisher-collection-settings-select__title">
            No collections
          </h3>
        </div>
      ) : (
        <div
          is-hide={isLoad.toString()}
          className="extensions-wisher-collection-settings-select__items">
          {collections.map((collectionName) => (
            <div
              className="extensions-wisher-collection-settings-select__item"
              onClick={() => onSelectCollection(collectionName)}
              key={collectionName}>
              <WisherCollectionShort
                key={collectionName}
                collectionName={collectionName}
                isSelected={collectionSelected.includes(collectionName)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
