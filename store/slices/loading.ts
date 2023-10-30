import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { errorResponse } from "~store/actions/error"

export interface LoadingStateDate {
  data: {
    marcUsPurchased: boolean
    updateItemCollection: boolean
  }
}

const initialState: LoadingStateDate = {
  data: {
    marcUsPurchased: false,
    updateItemCollection: false
  }
}

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleMarcUsPurchasedState: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.data.marcUsPurchased = payload
    },
    toggleUpdateItemCollection: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.data.updateItemCollection = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(errorResponse, () => {
      return initialState
    })
  }
})

export const { toggleMarcUsPurchasedState, toggleUpdateItemCollection } =
  loadingSlice.actions

export default loadingSlice.reducer
