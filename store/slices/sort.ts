import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Sort } from "~gql/types/graphql"
import { SortData, type SortParamKey } from "~models/sort-data"
import { logout } from "~store/actions/logout"

interface SortDataState {
  data: SortParamKey
}

const initialState: SortDataState = {
  data: "Most recent"
}

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortState: (state, { payload }: PayloadAction<SortParamKey>) => {
      state.data = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { sortState } = sortSlice.actions

export default sortSlice.reducer
