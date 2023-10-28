import { graphql } from "~gql/types"

export const collectionUpdate = graphql(`
  mutation UpdateCollection($oldCollection: String!, $newCollection: String!) {
    renameCollection(
      oldCollection: $oldCollection
      newCollection: $newCollection
    ) {
      status
    }
  }
`)
