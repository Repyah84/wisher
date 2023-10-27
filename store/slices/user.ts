import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { User } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface UserState {
  data: User | null
}

const initialState: UserState = {
  data: null
}

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserSate: (state, { payload }: PayloadAction<User>) => {
      state.data = payload
    },
    updateUserCollections: (state, { payload }: PayloadAction<string[]>) => {
      state.data.collections = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setUserSate, updateUserCollections } = userSlice.actions

export default userSlice.reducer
