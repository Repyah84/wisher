import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { UpdateCollectionName } from "~gql/hooks/collection.mutate"
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
    },
    updateCollectionNameState: (
      state,
      { payload }: PayloadAction<UpdateCollectionName>
    ) => {
      const itemIndex = state.data.findIndex(
        ({ title }) => title === payload.oldCollection
      )

      if (itemIndex === -1) {
        return
      }

      state.data[itemIndex].title = payload.newCollection
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setCollectionWithImages, updateCollectionNameState } =
  collectionWithImagesSlice.actions

export default collectionWithImagesSlice.reducer
