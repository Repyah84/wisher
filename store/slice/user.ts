import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "firebase/auth"

export interface UserData {
  user: User | null
}

const initialState: UserData = {
  user: null
}

const userAuthDataSlice = createSlice({
  name: "userAuthData",
  initialState,
  reducers: {
    toggleUser: (state, { payload }: PayloadAction<User | null>) => {
      state.user = payload
    }
  }
})

export const { toggleUser } = userAuthDataSlice.actions

export default userAuthDataSlice.reducer
