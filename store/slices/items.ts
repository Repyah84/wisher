import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { logout } from "~store/actions/logout"
import { resetItems } from "~store/actions/reset-Items"

export interface ItemStateData {
  items: Item[]
  count: number
}

export interface itemsState {
  data: ItemStateData
}

const initialState: itemsState = {
  data: {
    count: 0,
    items: []
  }
}

export const itemsState = createSlice({
  name: "wishes",
  initialState,
  reducers: {
    setItems: (state, { payload }: PayloadAction<ItemStateData>) => {
      const count = payload.count
      const items = [...state.data.items, ...payload.items]

      state.data = { count, items }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      return initialState
    })
    builder.addCase(resetItems, () => {
      return initialState
    })
  }
})

export const { setItems } = itemsState.actions

export default itemsState.reducer
