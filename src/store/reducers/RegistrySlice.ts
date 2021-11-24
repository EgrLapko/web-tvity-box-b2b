import { GeneralListType, RegistryType } from "../models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegistryState {
  registries: GeneralListType<RegistryType>;
  isLoading: boolean;
  error: string;
}

const initialState: RegistryState = {
  registries: {},
  isLoading: false,
  error: "",
};

export const registrySlice = createSlice({
  name: "registry",
  initialState,
  reducers: {
    registriesFetchingRequest(state) {
      state.isLoading = true;
    },
    registriesFetchingSuccess(
      state,
      action: PayloadAction<GeneralListType<RegistryType>>
    ) {
      state.isLoading = false;
      state.error = "";
      state.registries = action.payload;
    },
    registriesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    registriesPostRequest(state) {
      state.isLoading = true;
    },
    registriesPostSuccess(
      state,
      action: PayloadAction<GeneralListType<RegistryType>>
    ) {
      state.isLoading = false;
      state.error = "";
      state.registries = action.payload;
    },
    registriesPostError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    registriesDeleteRequest(state) {
      state.isLoading = true;
    },
    registriesDeleteSuccess(state, action: any) {
      state.isLoading = false;
      console.log("DELETE SUCCESS", action.payload);
    },
    registriesDeleteError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default registrySlice.reducer;
