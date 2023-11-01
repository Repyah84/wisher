import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { deleteItem } from "~store/actions/delete-item"
import { logout } from "~store/actions/logout"
import { updateItem } from "~store/actions/update-item"
import { updateItemCollection } from "~store/actions/update-item-collections"
import { updateItemPurchase } from "~store/actions/update-item-purchase"

interface ItemSateData {
  data: Item | null
}

const initialState: ItemSateData = {
  data: null
}

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, { payload }: PayloadAction<Item>) => {
      state.data = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout, () => {
        return initialState
      })
      .addCase(updateItemCollection, (state, { payload }) => {
        if (state.data.id !== payload.itemId) {
          return
        }

        state.data.collections = payload.collections
      })
      .addCase(updateItemPurchase, (state, { payload }) => {
        if (state.data.id !== payload.itemsId) {
          return
        }

        state.data.isPurchased = payload.isPurchased
      })
      .addCase(updateItem, (state, { payload }) => {
        state.data = payload
      })
  }
})

export const { setItem } = itemSlice.actions

export default itemSlice.reducer
