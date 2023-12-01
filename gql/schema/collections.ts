import { graphql } from "~gql/types"

export const collectionsGQL = graphql(`
  query Collections($options: CollectionsOptions!) {
    collections(options: $options) {
      id
      title
      authorId
    }
  }
`)
