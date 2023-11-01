import { graphql } from "~gql/types"

export const userDeleteGQL = graphql(`
  mutation DeleteUser {
    deleteUser {
      status
    }
  }
`)
