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

    const imagesList = []

    for (let i = 0; i < 3; i++) {
      let image = ""

      if (collectionImageData.images[i]) {
        image = collectionImageData.images[i]
      } else {
        image = emptyImage
      }

      imagesList.push(image)
    }

    return imagesList.map((image, key) => (
      <img
        width={32}
        height={32}
        style={{
          zIndex: key + 1
        }}
        className="extensions-wisher-collection-wisher-short__image"
        key={key}
        src={image}
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
