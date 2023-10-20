import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { ItemInput } from "~gql/types/graphql"
import { resetWisher } from "~store/actions/reset-wisher"

export interface WisherSearchData {
  images: string[] | null
  input: ItemInput
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
    setWisher(store, { payload }: PayloadAction<Wisher["data"]>) {
      store.data = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetWisher, () => {
      return initialState
    })
  }
})

export const { setWisher } = wisherSlice.actions

export default wisherSlice.reducer
