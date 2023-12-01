import { useMemo } from "react"
import { useSelector } from "react-redux"

import type { Collection } from "~gql/types/graphql"
import type { RootState } from "~store/wisher.store"

export const useCollectionsState = () => {
  const collections = useSelector(
    ({ collections: { data } }: RootState) => data
  )

  const collectionNames = useMemo(
    () => collections.map(({ title }) => title),
    [collections]
  )

  const collectionIds = useMemo(
    () => collections.map(({ id }) => id),
    [collections]
  )

  const getCollectionById = (collectionId: string): Collection | undefined => {
    return collections.find(({ id }) => id === collectionId)
  }

  const getCollectionByName = (
    collectionName: string
  ): Collection | undefined => {
    return collections.find(({ title }) => title === collectionName)
  }

  return {
    collections,
    collectionNames,
    collectionIds,
    getCollectionById,
    getCollectionByName
  }
}
