import { graphql } from "~gql/types"

export const search = graphql(`
  query SearchItems($search: String, $limit: Int, $offset: Int) {
    searchItems(search: $search, limit: $limit, offset: $offset) {
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
        collectionIds
        faviconUrl
        currency
        createdAt
        isPurchased
      }
    }
  }
`)
