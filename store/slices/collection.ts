import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import type { Item } from "~gql/types/graphql"
import { deleteItem } from "~store/actions/delete-item"
import { logout } from "~store/actions/logout"
import { updateCollectionNameState } from "~store/actions/update-collection-name"
import { updateItem } from "~store/actions/update-item"
import { updateItemCollection } from "~store/actions/update-item-collections"
import { updateItemPurchase } from "~store/actions/update-item-purchase"

interface CollectionItemData {
  count: number
  items: Item[]
  name: string
}

export interface CollectionItem {
  data: CollectionItemData
}

const initialState: CollectionItem = {
  data: {
    count: 0,
    items: [],
    name: ""
  }
}

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollection: (state, { payload }: PayloadAction<CollectionItemData>) => {
      const count = payload.count
      const items = [...state.data.items, ...payload.items]

      state.data = {
        count,
        items,
        name: payload.name
      }
    },
    initialStateWithName: (state, { payload }: PayloadAction<string>) => {
      const data: CollectionItemData = {
        name: payload,
        items: [],
        count: 0
      }

      state.data = data
    },
    resetCollection: (state) => {
      state.data = initialState.data
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout, () => {
        return initialState
      })
      .addCase(deleteItem, (state, { payload }) => {
        const itemIndex = state.data.items.findIndex(({ id }) => id === payload)

        if (itemIndex === -1) {
          return
        }

        state.data.count--
        state.data.items.splice(itemIndex, 1)
      })
      .addCase(updateItemCollection, (state, { payload }) => {
        const itemsIndex = state.data.items.findIndex(
          ({ id }) => id === payload.itemId
        )

        if (itemsIndex === -1) {
          return
        }

        if (payload.collections.includes(state.data.name)) {
          state.data.items[itemsIndex].collections = payload.collections

          return
        }

        state.data.items.splice(itemsIndex, 1)
      })
      .addCase(updateItemPurchase, (state, { payload }) => {
        const itemIndex = state.data.items.findIndex(
          ({ id }) => id === payload.itemsId
        )

        if (itemIndex === -1) {
          return
        }

        state.data.items[itemIndex].isPurchased = payload.isPurchased
      })
      .addCase(updateItem, (state, { payload }) => {
        const itemIndex = state.data.items.findIndex(
          ({ id }) => id === payload.id
        )

        if (itemIndex === -1) {
          return
        }

        state.data.items.splice(itemIndex, 1, payload)
      })
      .addCase(
        updateCollectionNameState,
        (state, { payload: { oldCollection, newCollection } }) => {
          if (oldCollection !== state.data.name) {
            return
          }

          state.data.name = newCollection
        }
      )
  }
})

export const { setCollection, resetCollection, initialStateWithName } =
  collectionSlice.actions

export default collectionSlice.reducer
