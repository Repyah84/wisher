import { graphql } from "~gql/types"

export const itemInput = graphql(`
  mutation Item($input: ItemInput!, $image: Upload) {
    item(input: $input, image: $image) {
      collections
      id
      createdAt
      updatedAt
      title
      isPurchased
    }
  }
`)
