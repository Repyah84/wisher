import { createAction } from "@reduxjs/toolkit"

export const updateItemCollection = createAction(
  "wisher/update-item-collection",
  (value: { itemId: string; collections: string[] }) => ({ payload: value })
)
