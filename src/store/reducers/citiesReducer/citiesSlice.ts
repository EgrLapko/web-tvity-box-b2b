import { createSlice } from "@reduxjs/toolkit";
import { getCities } from "./citiesActions";

interface CitiesState {
  result: any[];
  isLoading: boolean;
  error: any;
}

const initialState: CitiesState = {
  result: [],
  isLoading: false,
  error: null,
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: {
    [getCities.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCities.fulfilled]: (state, action) => {
      const res = action.payload?.data;

      state.isLoading = false;
      state.error = null;

      if (res && Array.isArray(res)) {
        const data = res[0];
        state.result = data?.Addresses || [];
      }
    },
    [getCities.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default citiesSlice.reducer;
