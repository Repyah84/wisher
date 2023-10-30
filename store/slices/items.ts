import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

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
    },
    updateItemPurchaseState: (
      state,
      {
        payload: { itemsId, isPurchased }
      }: PayloadAction<{ itemsId: string; isPurchased: boolean }>
    ) => {
      const itemIndex = state.data.items.findIndex(({ id }) => id === itemsId)

      if (itemIndex === -1) {
        return
      }

      state.data.items[itemIndex].isPurchased = isPurchased
    },
    updateItemsCollectionState: (
      state,
      {
        payload: { itemId, collections }
      }: PayloadAction<{ itemId: string; collections: string[] }>
    ) => {
      const itemsIndex = state.data.items.findIndex(({ id }) => id === itemId)

      if (itemsIndex === -1) {
        return
      }

      state.data.items[itemsIndex].collections = collections
    },
    deleteItem: (state, { payload }: PayloadAction<string>) => {
      const itemIndex = state.data.items.findIndex(({ id }) => id === payload)

      if (itemIndex === -1) {
        return
      }

      state.data.count--
      state.data.items.splice(itemIndex, 1)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const {
  setItems,
  resetItems,
  deleteItem,
  updateItemPurchaseState,
  updateItemsCollectionState
} = itemsState.actions

export default itemsState.reducer
