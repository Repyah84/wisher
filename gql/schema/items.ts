import { graphql } from "~gql/types"

export const items = graphql(`
  query Items(
    $collectionId: String
    $limit: Int
    $startAfterItemId: String
    $sort: Sort
  ) {
    items(
      collectionId: $collectionId
      limit: $limit
      startAfterItemId: $startAfterItemId
      sort: $sort
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
        collectionIds
        imageUrl
        id
        faviconUrl
        currency
        createdAt
        isPurchased
      }
    }
  }
`)
