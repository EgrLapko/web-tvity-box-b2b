import { createSlice } from "@reduxjs/toolkit";
import { getStreet } from "./streetActions";

interface StreetState {
  result: any;
  isLoading: boolean;
  error: any;
}

const initialState: StreetState = {
  result: [],
  isLoading: false,
  error: null,
};

export const streetSlice = createSlice({
  name: "street",
  initialState,
  reducers: {},
  extraReducers: {
    [getStreet.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getStreet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.result = action.payload.data || [];
    },
    [getStreet.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default streetSlice.reducer;
