import { graphql } from "~gql/types"

export const items = graphql(`
  query Items(
    $limit: Int
    $startAfterItemId: String
    $sort: Sort
    $collections: [String]
  ) {
    items(
      limit: $limit
      startAfterItemId: $startAfterItemId
      sort: $sort
      collections: $collections
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
      }
    }
  }
`)
