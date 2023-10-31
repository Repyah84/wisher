import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

interface SearchData {
  count: number
  items: Item[]
}

export interface SearchDataState {
  data: SearchData
}

const initialState: SearchDataState = {
  data: {
    count: 0,
    items: []
  }
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchItems: (state, { payload }: PayloadAction<SearchData>) => {
      state.data.count = payload.count
      state.data.items = [...state.data.items, ...payload.items]
    },
    updateSearchItemPurchaseState: (
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
    updateSearchItemsCollectionState: (
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
    updateSearchItem: (state, { payload }: PayloadAction<Item>) => {
      const itemIndex = state.data.items.findIndex(
        ({ id }) => id === payload.id
      )

      if (itemIndex === -1) {
        return
      }

      state.data.items.splice(itemIndex, 1, payload)
    },
    deleteSearchItem: (state, { payload }: PayloadAction<string>) => {
      const itemIndex = state.data.items.findIndex(({ id }) => id === payload)

      if (itemIndex === -1) {
        return
      }

      state.data.count--
      state.data.items.splice(itemIndex, 1)
    },
    resetSearchItems: (state) => {
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
  setSearchItems,
  resetSearchItems,
  updateSearchItem,
  updateSearchItemPurchaseState,
  updateSearchItemsCollectionState,
  deleteSearchItem
} = searchSlice.actions

export default searchSlice.reducer
