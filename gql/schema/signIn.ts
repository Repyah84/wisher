import { graphql } from "~gql/types"

export const signIn = graphql(`
  mutation Mutation($idToken: String!) {
    signIn(idToken: $idToken) {
      token
      user {
        email
      }
    }
  }
`)
