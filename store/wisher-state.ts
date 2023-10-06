import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface wisherState {
  isShow: boolean
}

const initialState: wisherState = {
  isShow: false
}

const wisherStateSlice = createSlice({
  name: "wisherState",
  initialState,
  reducers: {
    toggleWisherSate: (state, { payload }: PayloadAction<boolean>) => {
      state.isShow = payload
    }
  }
})

export const { toggleWisherSate } = wisherStateSlice.actions

export default wisherStateSlice.reducer
