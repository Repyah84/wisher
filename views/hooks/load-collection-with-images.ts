import { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"

import { useCollectionWithImages } from "~gql/hooks/collection-with-images"
import type { RootState } from "~store/wisher.store"

export const useLoadCollectionWithImages = (collectionId: string) => {
  const { getCollectionWithImages } = useCollectionWithImages()

  const collectionsImagesData = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  const collectionImageData = useMemo(() => {
    return collectionsImagesData.find(
      (collection) => collection.collectionId === collectionId
    )
  }, [collectionsImagesData, collectionId])

  useEffect(() => {
    if (collectionImageData !== undefined) {
      return
    }

    getCollectionWithImages(collectionId)
  }, [collectionImageData])

  return { collectionsImagesData, collectionImageData }
}
