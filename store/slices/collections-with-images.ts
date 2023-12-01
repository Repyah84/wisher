import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { logout } from "~store/actions/logout"

export interface CollectionWithImages {
  collectionId: string
  images: string[]
  count: number
}

export interface CollectionsWithImagesState {
  data: CollectionWithImages[]
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
        ({ collectionId }) => collectionId === payload.collectionId
      )

      if (itemIndex === -1) {
        state.data.push(payload)

        return
      }

      state.data[itemIndex] = payload
    },
    deleteCollectionWithImages: (state, { payload }: PayloadAction<string>) => {
      const newData = state.data.filter(
        ({ collectionId }) => collectionId !== payload
      )

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
  deleteCollectionWithImages,
  resetCollectionsWithImages
} = collectionWithImagesSlice.actions

export default collectionWithImagesSlice.reducer
