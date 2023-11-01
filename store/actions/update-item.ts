import { createAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"

export const updateItem = createAction("wisher/update-item", (value: Item) => ({
  payload: value
}))
