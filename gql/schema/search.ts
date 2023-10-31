import { graphql } from "~gql/types"

export const search = graphql(`
  query SearchItems(
    $search: String
    $collections: [String]
    $limit: Int
    $offset: Int
  ) {
    searchItems(
      search: $search
      collections: $collections
      limit: $limit
      offset: $offset
    ) {
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
        isPurchased
      }
    }
  }
`)
