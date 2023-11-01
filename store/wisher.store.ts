import { combineReducers, configureStore } from "@reduxjs/toolkit"

import wisherCollectionReducer from "./slices/collection"
import collectionWithImagesReducer from "./slices/collections-with-images"
import itemReducer from "./slices/item"
import userItemsReducer from "./slices/items"
import loadingReducer from "./slices/loading"
import searchReducer from "./slices/search"
import sortReducer from "./slices/sort"
import userReducer from "./slices/user"
import wisherReducer from "./slices/wisher"

const reducer = combineReducers({
  user: userReducer,
  items: userItemsReducer,
  wisher: wisherReducer,
  collection: wisherCollectionReducer,
  collectionWithImages: collectionWithImagesReducer,
  loading: loadingReducer,
  sort: sortReducer,
  search: searchReducer,
  item: itemReducer
})

export const wisherStore = configureStore({
  reducer
})

export type RootState = ReturnType<typeof wisherStore.getState>
export type AppDispatch = typeof wisherStore.dispatch
