import { createSlice } from "@reduxjs/toolkit";
import { getWarehouse } from "./warehouseActions";

interface WarehouseState {
  result: any;
  isLoading: boolean;
  error: any;
}

const initialState: WarehouseState = {
  result: [],
  isLoading: false,
  error: null,
};

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {},
  extraReducers: {
    [getWarehouse.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getWarehouse.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.result = action.payload.data;
    },
    [getWarehouse.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default warehouseSlice.reducer;
