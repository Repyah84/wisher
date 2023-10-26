import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface CollectionWithImages {
  title: string
  images: string[]
  count: number
}

export interface CollectionsWithImagesState {
  data: CollectionWithImages[] | null
}

const initialState: CollectionsWithImagesState = {
  data: []
}

const collectionWithImagesSlice = createSlice({
  name: "collectionWithImages",
  initialState,
  reducers: {
    setCollectionWithImages: (
      state,
      { payload }: PayloadAction<CollectionWithImages>
    ) => {
      const itemIndex = state.data.findIndex(
        ({ title }) => title === payload.title
      )

      if (itemIndex === -1) {
        state.data.push(payload)

        return
      }

      state.data[itemIndex] = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setCollectionWithImages } = collectionWithImagesSlice.actions

export default collectionWithImagesSlice.reducer
