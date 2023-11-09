import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { ItemInput } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"

export interface WisherSearchData {
  images: string[] | null
  input: ItemInput
  imageUpload?: File
}

interface Wisher {
  data: WisherSearchData | null
}

const initialState: Wisher = {
  data: null
}
export const wisherSlice = createSlice({
  name: "wisher",
  initialState,
  reducers: {
    setWisher(store, { payload }: PayloadAction<WisherSearchData>) {
      store.data = payload
    },
    patchWisherState: (
      state,
      { payload }: PayloadAction<Partial<ItemInput>>
    ) => {
      state.data.input = { ...state.data.input, ...payload }
    },
    resetWisher: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
  }
})

export const { setWisher, resetWisher, patchWisherState } = wisherSlice.actions

export default wisherSlice.reducer
