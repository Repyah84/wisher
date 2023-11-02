import { useState } from "react"

export const useSelectCollection = (
  collections: string[] | null | undefined
) => {
  const [selectedCollections, setSelectedCollections] = useState<string[]>(
    collections || []
  )

  const onSelectCollection = (collectionName: string) => {
    setSelectedCollections((collections) => {
      if (selectedCollections.includes(collectionName)) {
        return collections.filter((name) => name !== collectionName)
      }

      return [...collections, collectionName]
    })
  }

  return { selectedCollections, onSelectCollection }
}
