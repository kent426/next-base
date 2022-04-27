import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "src/state/store";

export interface DummyState {
  dumbData: string;
}

const initialState: DummyState = {
  dumbData: "",
};

export const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    setDummy: (state, action: PayloadAction<string>) => {
      state.dumbData = action.payload;
    },
  },
});

export const actions = dummySlice.actions;

export const selectDummyData = (state: AppState) => state.dummy.dumbData;
export const selectors = {
  selectDummyData,
};

export default dummySlice.reducer;
