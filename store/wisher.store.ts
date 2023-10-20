import { combineReducers, configureStore } from "@reduxjs/toolkit"

import userItemsReducer from "./slices/items"
import userReducer from "./slices/user"
import wisherReducer from "./slices/wisher"

const reducer = combineReducers({
  user: userReducer,
  items: userItemsReducer,
  wisher: wisherReducer
})

export const wisherStore = configureStore({
  reducer
})

export type RootState = ReturnType<typeof wisherStore.getState>
export type AppDispatch = typeof wisherStore.dispatch
