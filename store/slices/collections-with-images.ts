import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { UpdateCollectionName } from "~gql/hooks/collection.mutate"
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
    updateCollectionWithImagesName: (
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
    },
    deleteCollectionWithImages: (state, { payload }: PayloadAction<string>) => {
      const newData = state.data.filter(({ title }) => title !== payload)

      state.data = newData
    },
    resetCollectionsWithImages: (state) => {
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
  setCollectionWithImages,
  updateCollectionWithImagesName,
  deleteCollectionWithImages,
  resetCollectionsWithImages
} = collectionWithImagesSlice.actions

export default collectionWithImagesSlice.reducer
