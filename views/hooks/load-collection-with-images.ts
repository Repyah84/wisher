import { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"

import { useCollectionWithImages } from "~gql/hooks/collection-with-images"
import type { RootState } from "~store/wisher.store"

export const useLoadCollectionWithImages = (collectionName: string) => {
  const { getCollectionWithImages } = useCollectionWithImages()

  const collectionsImagesData = useSelector(
    ({ collectionWithImages: { data } }: RootState) => data
  )

  const collectionImageData = useMemo(() => {
    return collectionsImagesData.find(({ title }) => title === collectionName)
  }, [collectionsImagesData, collectionName])

  useEffect(() => {
    if (collectionImageData !== undefined) {
      return
    }

    getCollectionWithImages(collectionName)
  }, [collectionName, collectionImageData])

  return { collectionsImagesData, collectionImageData }
}
