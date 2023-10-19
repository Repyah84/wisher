import { graphql } from "~gql/types"

export const itemAdd = graphql(`
  mutation Item($input: ItemInput!) {
    item(input: $input) {
      collections
      id
      createdAt
      updatedAt
      title
    }
  }
`)
