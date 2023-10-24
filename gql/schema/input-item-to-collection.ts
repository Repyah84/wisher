import { graphql } from "~gql/types"

export const addItemsToCollection = graphql(`
  mutation AddItemsToCollection($ids: [ID]!, $collection: String!) {
    addItemsToCollection(ids: $ids, collection: $collection) {
      status
    }
  }
`)
