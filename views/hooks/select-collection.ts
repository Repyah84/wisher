import { useState } from "react"

export const useSelectCollection = (
  collectionIds: string[] | null | undefined
) => {
  const [selectedCollections, setSelectedCollections] = useState<string[]>(
    collectionIds || []
  )

  const onSelectCollection = (collectionId: string) => {
    setSelectedCollections((collections) => {
      if (selectedCollections.includes(collectionId)) {
        return collections.filter((name) => name !== collectionId)
      }

      return [...collections, collectionId]
    })
  }

  return { selectedCollections, onSelectCollection }
}
