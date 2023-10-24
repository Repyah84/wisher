import { graphql } from "~gql/types"

export const collectionInput = graphql(`
  mutation UserCollectionsAdd($input: UserInput!) {
    user(input: $input) {
      uid
      collections
    }
  }
`)
