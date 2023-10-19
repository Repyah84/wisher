import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { QueryQuery } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface UserState {
  data: QueryQuery["user"] | null
}

const initialState: UserState = {
  data: null
}

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    toggleUserSate: (state, { payload }: PayloadAction<QueryQuery["user"]>) => {
      state.data = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { toggleUserSate } = userSlice.actions

export default userSlice.reducer
