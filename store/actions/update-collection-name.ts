import { createAction } from "@reduxjs/toolkit"

import type { UpdateCollectionName } from "~gql/hooks/collection.mutate"

export const updateCollectionNameState = createAction(
  "wisher/update-collection-name",
  (value: UpdateCollectionName) => ({ payload: value })
)
