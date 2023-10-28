import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { UpdateCollectionName } from "~gql/hooks/collection.mutate"
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
    },
    updateUserCollectionName: (
      state,
      { payload }: PayloadAction<UpdateCollectionName>
    ) => {
      const collections = state.data.collections

      const indexName = collections.findIndex(
        (name) => name === payload.oldCollection
      )

      if (indexName === -1) {
        return
      }

      collections.splice(indexName, 1, payload.newCollection)

      state.data.collections = collections
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setUserSate, updateUserCollections, updateUserCollectionName } =
  userSlice.actions

export default userSlice.reducer
