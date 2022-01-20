import { createSlice } from "@reduxjs/toolkit";
import {
  createReceiver,
  generateReceiver,
  getReceiver,
  getReceiverName,
} from "./receiverActions";

interface ReceiverState {
  receiver: any;
  receiverName: any;
  isLoading: boolean;
  isCreating: boolean;
  error: any;
}

const initialState: ReceiverState = {
  receiver: undefined,
  receiverName: "",
  isLoading: false,
  isCreating: false,
  error: null,
};

export const receiverSlice = createSlice({
  name: "receiver",
  initialState,
  reducers: {
    createNewReceiver(state, action) {
      state.receiver.data = action.payload.data;
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
    [getReceiverName.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getReceiverName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.receiverName = action.payload;
    },
    [getReceiverName.rejected]: (state, action) => {
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
