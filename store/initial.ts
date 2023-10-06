import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface InitialWisher {
  isInitial: boolean
}

const initialState: InitialWisher = {
  isInitial: false
}

const initialWisherSlice = createSlice({
  name: "initialWisher",
  initialState,
  reducers: {
    initialWisher: (state, { payload }: PayloadAction<boolean>) => {
      state.isInitial = payload
    }
  }
})

export const { initialWisher } = initialWisherSlice.actions

export default initialWisherSlice.reducer
