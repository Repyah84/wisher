import { graphql } from "~gql/types"

export const signIn = graphql(`
  mutation SignIn($idToken: String!) {
    signIn(idToken: $idToken) {
      token
    }
  }
`)
