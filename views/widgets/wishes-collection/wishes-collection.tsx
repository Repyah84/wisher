import emptyImage from "data-base64:~assets/garage.png"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useGetCollectionItems } from "~gql/hooks/collection-items"
import { resetCollection } from "~store/slices/collection"
import type { RootState } from "~store/wisher.store"
import { Loader } from "~views/components/loader/loader"
import { useLoadCollectionWithImages } from "~views/hooks/load-collection-with-images"

interface Props {
  collectionName: string
}

export const WishesCollection = ({ collectionName }: Props) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { collectionImageData } = useLoadCollectionWithImages(collectionName)

  const { loading, getCollectionItems } = useGetCollectionItems()

  const collectionItems = useSelector(
    ({ collection: { data } }: RootState) => data
  )

  const collectionImages = useMemo(() => {
    if (collectionImageData === undefined) {
      return
    }

    return {
      count: collectionImageData.count,
      images: collectionImageData.images.map((image, index) => (
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
  }, [collectionImageData])

  const onCollectionClick = () => {
    if (loading) {
      return
    }

    if (collectionImages.count === 0) {
      dispatch(resetCollection())

      navigate(`/wisher/wishes-collection/${collectionName}`)

      return
    }

    if (
      collectionItems.items.length === 0 ||
      collectionName !== collectionItems.name
    ) {
      getCollectionItems(collectionName, 10, true).then(() => {
        navigate(`/wisher/wishes-collection/${collectionName}`)
      })

      return
    }

    navigate(`/wisher/wishes-collection/${collectionName}`)
  }

  return (
    collectionImageData !== undefined && (
      <div
        onClick={() => onCollectionClick()}
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
  )
}
