import { graphql } from "~gql/types"

/**
 * Demo switch on prod server api
 */
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
