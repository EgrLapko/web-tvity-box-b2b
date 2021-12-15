import { createSlice } from "@reduxjs/toolkit";
import {
  createReceiver,
  generateReceiver,
  getReceiver,
} from "./receiverActions";

interface ReceiverState {
  receiver: any;
  isLoading: boolean;
  isUpdating: boolean;
  isCreating: boolean;
  error: any;
}

const initialState: ReceiverState = {
  receiver: undefined,
  isLoading: false,
  isUpdating: false,
  isCreating: false,
  error: null,
};

export const receiverSlice = createSlice({
  name: "receiver",
  initialState,
  reducers: {
    createNewReceiver(state, action) {
      state.receiver.data.push(action.payload.data);
    },
  },
  extraReducers: {
    [getReceiver.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getReceiver.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.receiver = action.payload;
    },
    [getReceiver.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [createReceiver.pending]: (state) => {
      state.isCreating = true;
      state.error = null;
    },
    [createReceiver.fulfilled]: (state) => {
      state.isCreating = false;
    },
    [generateReceiver.pending]: (state) => {
      state.isCreating = true;
      state.error = null;
    },
    [generateReceiver.fulfilled]: (state) => {
      state.isCreating = false;
    },
  },
});

export const { createNewReceiver } = receiverSlice.actions;

export default receiverSlice.reducer;
