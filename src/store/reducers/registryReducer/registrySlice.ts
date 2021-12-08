import { createSlice } from "@reduxjs/toolkit";
import { getRegistry, updateRegistry } from "./registryActions";
import { RegistryType } from "store/models";

interface RegistryState {
  registry?: RegistryType;
  isLoading: boolean;
  isUpdating: boolean;
  error: any;
}

const initialState: RegistryState = {
  registry: undefined,
  isLoading: false,
  isUpdating: false,
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
    [updateRegistry.pending]: (state) => {
      state.isUpdating = true;
      state.error = null;
    },
    [updateRegistry.fulfilled]: (state) => {
      state.isUpdating = false;
      state.error = null;
    },
  },
});

export default registrySlice.reducer;
