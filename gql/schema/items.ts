import { graphql } from "~gql/types"

export const items = graphql(`
  query Items {
    items {
      rows {
        id
        url
        imageUrl
        title
        note
        personalRating
        price
        collections
        currency
        marketplace
        updatedAt
        createdAt
        isPurchased
        faviconUrl
      }
    }
  }
`)
