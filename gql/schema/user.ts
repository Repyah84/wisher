import { graphql } from "~gql/types"

export const user = graphql(`
  query User {
    user {
      birthday
      email
      firstName
      imageUrl
      isHidden
      lastName
      uid
    }
  }
`)
