import { combineReducers, configureStore } from "@reduxjs/toolkit"

import userReducer from "./slices/user"

const reducer = combineReducers({
  user: userReducer
})

export const wisherStore = configureStore({
  reducer
})

export type RootState = ReturnType<typeof wisherStore.getState>
export type AppDispatch = typeof wisherStore.dispatch
