import { graphql } from "~gql/types"

export const collectionsWithImages = graphql(`
  query CollectionsWithImages($collections: [String]) {
    collectionsWithImages(collections: $collections) {
      images
    }
  }
`)
