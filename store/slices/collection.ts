import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

interface CollectionItemData {
  count: number
  items: Item[]
  name: string
}

export interface CollectionItem {
  data: CollectionItemData
}

const initialState: CollectionItem = {
  data: {
    count: 0,
    items: [],
    name: ""
  }
}

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollection: (state, { payload }: PayloadAction<CollectionItemData>) => {
      const count = payload.count
      const items = [...state.data.items, ...payload.items]

      state.data = {
        count,
        items,
        name: payload.name
      }
    },
    deleteItemFromCollection: (state, { payload }: PayloadAction<string>) => {
      const itemIndex = state.data.items.findIndex(({ id }) => id === payload)

      if (itemIndex === -1) {
        return
      }

      state.data.count--
      state.data.items.splice(itemIndex, 1)
    },
    updateItemInCollection: (state, { payload }: PayloadAction<Item>) => {
      const itemIndex = state.data.items.findIndex(
        ({ id }) => id === payload.id
      )

      if (itemIndex === -1) {
        return
      }

      state.data.items.splice(itemIndex, 1, payload)
    },
    updateCollectionItemPurchaseState: (
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
    resetCollection: (state) => {
      state.data = initialState.data
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const {
  setCollection,
  resetCollection,
  deleteItemFromCollection,
  updateItemInCollection,
  updateCollectionItemPurchaseState
} = collectionSlice.actions

export default collectionSlice.reducer
