import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { syncStorage } from "redux-persist-webextension-storage"

import { persistReducer, persistStore } from "@plasmohq/redux-persist"
import { Storage } from "@plasmohq/storage"

import userReducer, { toggleUser } from "./slice/user"

const combinedReducers = combineReducers({
  userStore: userReducer
})

const persistConfig = {
  key: "root",
  version: 1,
  storage: syncStorage
}

const persistedReducer = persistReducer(persistConfig, combinedReducers)

// Until persistReducer is fixed, we need to use this mock store to get the types
const mockStore = configureStore({
  reducer: combinedReducers
})

// @ts-ignore
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
}) as typeof mockStore

export const persistor = persistStore(store)

// This is what makes Redux sync properly with multiple pages
// Open your extension's options page and popup to see it in action
new Storage().watch({
  [`persist:${persistConfig.key}`]: (change) => {
    const { oldValue, newValue } = change
    const updatedKeys = []

    for (const key in oldValue) {
      if (oldValue[key] !== newValue?.[key]) {
        updatedKeys.push(key)
      }
    }

    for (const key in newValue) {
      if (oldValue?.[key] !== newValue[key]) {
        updatedKeys.push(key)
      }
    }

    if (updatedKeys.length > 0) {
      persistor.resync()
    }
  }
})

// Get the types from the mock store
export type RootState = ReturnType<typeof mockStore.getState>
export type AppDispatch = typeof mockStore.dispatch

// Export the hooks with the types from the mock store
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
