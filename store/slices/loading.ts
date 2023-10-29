import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface LoadingStateDate {
  data: {
    value: boolean
  }
}

const initialState: LoadingStateDate = {
  data: {
    value: false
  }
}

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoadingState: (state, { payload }: PayloadAction<boolean>) => {
      state.data.value = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { toggleLoadingState } = loadingSlice.actions

export default loadingSlice.reducer
