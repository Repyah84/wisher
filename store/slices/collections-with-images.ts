import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { CollectionsWithImagesQuery } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface CollectionsWithImagesState {
  data: CollectionsWithImagesQuery["collectionsWithImages"] | null
}

const initialState: CollectionsWithImagesState = {
  data: null
}

const collectionWithImagesSlice = createSlice({
  name: "collectionWithImages",
  initialState,
  reducers: {
    setCollectionsWithImages: (
      state,
      {
        payload
      }: PayloadAction<CollectionsWithImagesQuery["collectionsWithImages"]>
    ) => {
      state.data = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setCollectionsWithImages } = collectionWithImagesSlice.actions

export default collectionWithImagesSlice.reducer
