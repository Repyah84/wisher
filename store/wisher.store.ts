import { combineReducers, configureStore } from "@reduxjs/toolkit"

import wisherCollectionReducer from "./slices/collection"
import collectionWithImagesReducer from "./slices/collections-with-images"
import userItemsReducer from "./slices/items"
import userReducer from "./slices/user"
import wisherReducer from "./slices/wisher"

const reducer = combineReducers({
  user: userReducer,
  items: userItemsReducer,
  wisher: wisherReducer,
  collection: wisherCollectionReducer,
  collectionWithImages: collectionWithImagesReducer
})

export const wisherStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof wisherStore.getState>
export type AppDispatch = typeof wisherStore.dispatch
