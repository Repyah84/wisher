import { graphql } from "~gql/types"

export const user = graphql(`
  query Query {
    user {
      birthday
      collections
      email
      firstName
      imageUrl
      isHidden
      lastName
      notificationSetting {
        birthdayRemind
        newsAndUpdates
      }
      uid
    }
  }
`)
