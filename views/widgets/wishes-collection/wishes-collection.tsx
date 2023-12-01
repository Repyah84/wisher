import emptyImage from "data-base64:~assets/garage.png"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useGetCollectionItems } from "~gql/hooks/collection-items"
import type { Collection } from "~gql/types/graphql"
import { initialStateWithName } from "~store/slices/collection"
import type { RootState } from "~store/wisher.store"
import { Loader } from "~views/components/loader/loader"
import { useLoadCollectionWithImages } from "~views/hooks/load-collection-with-images"

interface Props {
  collection: Collection
}

export const WishesCollection = ({
  collection: { id: collectionId, title: collectionName }
}: Props) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { collectionImageData } = useLoadCollectionWithImages(collectionId)

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
      dispatch(initialStateWithName(collectionId))

      navigate(`/wisher/wishes-collection`)

      return
    }

    if (
      collectionItems.items.length === 0 ||
      collectionId !== collectionItems.collectionId
    ) {
      getCollectionItems(collectionId, 10, true).then(() => {
        navigate(`/wisher/wishes-collection`)
      })

      return
    }

    navigate(`/wisher/wishes-collection`)
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
