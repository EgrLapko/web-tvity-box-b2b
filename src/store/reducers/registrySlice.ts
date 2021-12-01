import { createSlice } from "@reduxjs/toolkit";
import { deleteRegistry, getRegistries } from "./ActionCreators";

// todo: fix types usage
interface RegistryState {
  registries: any;
  isLoading: boolean;
  error: any;
}

const initialState: RegistryState = {
  registries: {},
  isLoading: false,
  error: null,
};

export const registrySlice = createSlice({
  name: "registry",
  initialState,
  reducers: {
    removeRegistry(state, action) {
      state.registries.data.filter(
        (registry: any) => registry.id !== action.payload.id
      );
    },
    createNewRegistry(state, action) {
      state.registries.data.push(action.payload.data);
    },
  },
  extraReducers: {
    [getRegistries.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getRegistries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.registries = action.payload;
    },
    [getRegistries.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [deleteRegistry.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { removeRegistry, createNewRegistry } = registrySlice.actions;

export default registrySlice.reducer;
