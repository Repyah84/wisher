import { graphql } from "~gql/types"

export const itemInput = graphql(`
  mutation Item($input: ItemInput!, $image: Upload) {
    item(input: $input, image: $image) {
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
`)
