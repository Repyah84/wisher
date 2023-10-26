import emptyImage from "data-base64:~assets/garage.png"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useGetCollectionItems } from "~gql/hooks/collection-items"
import type { RootState } from "~store/wisher.store"
import { Loader } from "~views/components/loader/loader"

interface Props {
  collectionName: string
}

export const WishesCollection = ({ collectionName }: Props) => {
  const navigate = useNavigate()

  const { loading, getCollectionItems } = useGetCollectionItems()

  const onCollectionClick = (coolName: string) => {
    getCollectionItems(collectionName).then(() => {
      navigate(`/wisher/wishes-collection/${coolName}`)
    })
  }

  const collectionImagesData = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  const collectionImages = useMemo(() => {
    const collection = collectionImagesData.find(
      ({ title }) => title === collectionName
    )

    return {
      count: collection.count,
      images: collection.images.map((image, index) => (
        <img
          width={64}
          height={64}
          key={index}
          className="extensions-wishes-collection-item__image"
          src={image || emptyImage}
          alt="Wish image"
        />
      ))
    }
  }, [collectionName, collectionImagesData])

  return (
    <div
      onClick={() => onCollectionClick(collectionName)}
      className="extensions-wishes-collection-item">
      <div className="extensions-wishes-collection-item__header">
        <span className="extensions-wishes-collection-item__title">
          {collectionName}
        </span>

        <span>{collectionImages.count} Wishes</span>
      </div>

      <div className="extensions-wishes-collection-item__wrapper">
        <div className="extensions-wishes-collection-item__images">
          {collectionImages.images}
        </div>

        <Loader size={6} isLoading={loading} />
      </div>
    </div>
  )
}
