import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { deleteItem } from "~store/actions/delete-item"
import { logout } from "~store/actions/logout"
import { updateItem } from "~store/actions/update-item"
import { updateItemCollection } from "~store/actions/update-item-collections"
import { updateItemPurchase } from "~store/actions/update-item-purchase"

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
    resetSearchItems: (state) => {
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

        state.data.items[itemsIndex].collections = payload.collections
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

export const { setSearchItems, resetSearchItems } = searchSlice.actions

export default searchSlice.reducer
