import { createSlice } from "@reduxjs/toolkit";
import { getRegistry } from "./ActionCreators";
import { RegistryType } from "../models";

interface RegistryState {
  registry?: RegistryType;
  isLoading: boolean;
  error: any;
}

const initialState: RegistryState = {
  registry: undefined,
  isLoading: false,
  error: null,
};

export const registrySlice = createSlice({
  name: "registry",
  initialState,
  reducers: {},
  extraReducers: {
    [getRegistry.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getRegistry.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.registry = action.payload;
    },
    [getRegistry.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default registrySlice.reducer;
