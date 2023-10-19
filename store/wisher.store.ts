import { combineReducers, configureStore } from "@reduxjs/toolkit"

import userItemsReducer from "./slices/items"
import userReducer from "./slices/user"

const reducer = combineReducers({
  user: userReducer,
  items: userItemsReducer
})

export const wisherStore = configureStore({
  reducer
})

export type RootState = ReturnType<typeof wisherStore.getState>
export type AppDispatch = typeof wisherStore.dispatch
