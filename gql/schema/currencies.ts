import { graphql } from "~gql/types"

export const currencies = graphql(`
  query Currencies {
    currencies {
      code
      name
    }
  }
`)
