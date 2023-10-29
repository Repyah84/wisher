import { graphql } from "~gql/types"

export const deleteItemGql = graphql(`
  mutation DeleteItem($deleteItemId: ID!) {
    deleteItem(id: $deleteItemId) {
      status
    }
  }
`)
