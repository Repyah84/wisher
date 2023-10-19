import { graphql } from "~gql/types"

export const items = graphql(`
  query Items {
    items {
      count
      rows {
        url
        updatedAt
        title
        price
        personalRating
        note
        marketplace
        imageUrl
        id
        faviconUrl
        currency
        createdAt
        collections
      }
    }
  }
`)
