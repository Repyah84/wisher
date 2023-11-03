import emptyImage from "data-base64:~assets/garage.png"
import { useMemo, type ReactNode } from "react"

import { CheckSvg } from "~views/components/icons/check/check"
import { useLoadCollectionWithImages } from "~views/hooks/load-collection-with-images"

interface Props {
  collectionName: string
  isSelected?: boolean
  children?: ReactNode
}

export const WisherCollectionShort = ({
  isSelected,
  collectionName,
  children
}: Props) => {
  const { collectionImageData } = useLoadCollectionWithImages(collectionName)

  const images = useMemo(() => {
    if (collectionImageData === undefined) {
      return
    }

    return collectionImageData.images.slice(0, 3).map((image, key) => (
      <img
        width={32}
        height={32}
        style={{
          zIndex: key + 1
        }}
        className="extensions-wisher-collection-wisher-short__image"
        key={key}
        src={image || emptyImage}
        alt="Collection Images"
      />
    ))
  }, [collectionImageData])

  return (
    collectionImageData !== undefined && (
      <div className="extensions-wisher-collection-wisher-short">
        <div className="extensions-wisher-collection-wisher-short__images">
          {images}
        </div>

        <span className="extensions-wisher-collection-wisher-short__name">
          {collectionImageData.title}
        </span>

        {isSelected && <CheckSvg />}

        {children}
      </div>
    )
  )
}
