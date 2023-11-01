import { createAction } from "@reduxjs/toolkit"

export const deleteItem = createAction("wisher/remove", (value: string) => ({
  payload: value
}))
