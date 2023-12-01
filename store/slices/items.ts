import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { deleteItem } from "~store/actions/delete-item"
import { logout } from "~store/actions/logout"
import { updateItem } from "~store/actions/update-item"
import { updateItemCollection } from "~store/actions/update-item-collections"
import { updateItemPurchase } from "~store/actions/update-item-purchase"

export interface ItemStateData {
  items: Item[]
  count: number
}

export interface itemsState {
  data: ItemStateData
}

const initialState: itemsState = {
  data: {
    count: 0,
    items: []
  }
}

export const itemsState = createSlice({
  name: "wishes",
  initialState,
  reducers: {
    setItems: (state, { payload }: PayloadAction<ItemStateData>) => {
      const count = payload.count
      const items = [...state.data.items, ...payload.items]

      state.data = { count, items }
    },
    resetItems: (state) => {
      state.data = initialState.data
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout, () => {
        return initialState
      })
      .addCase(deleteItem, (state, { payload }) => {
        const itemIndex = state.data.items.findIndex(({ id }) => id === payload)

        if (itemIndex === -1) {
          return
        }

        state.data.count--
        state.data.items.splice(itemIndex, 1)
      })
      .addCase(updateItemCollection, (state, { payload }) => {
        const itemsIndex = state.data.items.findIndex(
          ({ id }) => id === payload.itemId
        )

        if (itemsIndex === -1) {
          return
        }

        state.data.items[itemsIndex].collectionIds = payload.collectionIds
      })
      .addCase(updateItemPurchase, (state, { payload }) => {
        const itemIndex = state.data.items.findIndex(
          ({ id }) => id === payload.itemsId
        )

        if (itemIndex === -1) {
          return
        }

        state.data.items[itemIndex].isPurchased = payload.isPurchased
      })
      .addCase(updateItem, (state, { payload }) => {
        const itemIndex = state.data.items.findIndex(
          ({ id }) => id === payload.id
        )

        if (itemIndex === -1) {
          return
        }

        state.data.items.splice(itemIndex, 1, payload)
      })
  }
})

export const { setItems, resetItems } = itemsState.actions

export default itemsState.reducer
