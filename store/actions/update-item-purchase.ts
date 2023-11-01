import { createAction } from "@reduxjs/toolkit"

export const updateItemPurchase = createAction(
  "wisher/update-item-purchase",
  (value: { itemsId: string; isPurchased: boolean }) => ({ payload: value })
)
