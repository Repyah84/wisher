import { graphql } from "~gql/types"

export const updateUserGQL = graphql(`
  mutation UserUpdate($input: UserInput!, $image: Upload) {
    user(input: $input, image: $image) {
      birthday
      collections
      email
      firstName
      imageUrl
      isHidden
      lastName
      uid
    }
  }
`)
