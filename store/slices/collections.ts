import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Collection } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface CollectionsState {
  data: Collection[]
}

const initialState: CollectionsState = {
  data: []
}

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setCollections: (state, { payload }: PayloadAction<Collection[]>) => {
      state.data = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setCollections } = collectionsSlice.actions

export default collectionsSlice.reducer
