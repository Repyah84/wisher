import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useMemo } from "react"
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
    ({ collections: { data } }: RootState) => data
  )

  const collectionWithImages = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  const isLoad = useMemo(() => {
    return collectionWithImages.length !== collections.length
  }, [collectionWithImages, collections])

  return (
    <div className="extensions-wisher-collection-settings-select">
      {isLoad && (
        <div className="extensions-wisher-collection-settings-select__loader">
          <Loader isLoading={true} />
        </div>
      )}

      {collections.length === 0 ? (
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
          {collections.map(({ id }) => (
            <div
              className="extensions-wisher-collection-settings-select__item"
              onClick={() => onSelectCollection(id)}
              key={id}>
              <WisherCollectionShort
                collectionsId={id}
                isSelected={collectionSelected.includes(id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
