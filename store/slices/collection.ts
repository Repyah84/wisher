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

export const { setCollection, resetCollection } = collectionSlice.actions

export default collectionSlice.reducer
