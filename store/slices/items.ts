import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface UserState {
  data: Item[] | null
}

const initialState: UserState = {
  data: null
}

export const itemsState = createSlice({
  name: "wishes",
  initialState,
  reducers: {
    setItems: (state, { payload }: PayloadAction<Item[]>) => {
      state.data = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setItems } = itemsState.actions

export default itemsState.reducer
