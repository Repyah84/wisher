import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface CollectionItem {
  data: Item[]
}

const initialState: CollectionItem = {
  data: null
}

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollection: (state, { payload }: PayloadAction<Item[]>) => {
      state.data = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setCollection } = collectionSlice.actions

export default collectionSlice.reducer
