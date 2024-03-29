import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "src/state/store";

export interface PersistDummyState {
  persistDumbData: string;
}

const initialState: PersistDummyState = {
  persistDumbData: "",
};

export const persistDummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    setPersistDummy: (state, action: PayloadAction<string>) => {
      state.persistDumbData = action.payload;
    },
  },
});

export const actions = persistDummySlice.actions;

const setProcess = createAction<string>(`${persistDummySlice.name}/setProcess`);
export const sagaActions = {
  setProcess,
};

export const selectPersistDummyData = (state: AppState) =>
  state.persistDummy.persistDumbData;
export const selectors = {
  selectPersistDummyData,
};

export default persistDummySlice.reducer;
