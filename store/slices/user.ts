import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { User } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"
import { updateCollectionNameState } from "~store/actions/update-collection-name"

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
    builder
      .addCase(logout, () => {
        return initialState
      })
      .addCase(updateCollectionNameState, (state, { payload }) => {
        const collections = state.data.collections

        const indexName = collections.findIndex(
          (name) => name === payload.oldCollection
        )

        if (indexName === -1) {
          return
        }

        collections.splice(indexName, 1, payload.newCollection)

        state.data.collections = collections
      })
  }
})

export const { setUserSate, updateUserCollections } = userSlice.actions

export default userSlice.reducer
