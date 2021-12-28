import { createAsyncThunk } from "@reduxjs/toolkit";
import { IdType } from "store/models";
import { createNewReceiver } from "./receiverSlice";

export const getReceiver: any = createAsyncThunk(
  "receiver/getReceiver",
  async (id: IdType, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://b2b-uploader.mircloud.host/api/registry/${id}/receiver`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createReceiver: any = createAsyncThunk(
  "receiver/createReceiver",
  async (payload: any, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://b2b-uploader.mircloud.host/api/registry/${payload.id}/receiver`,
        {
          method: "POST",
          headers: { "Content-type": "applications/json;charset=UTF-8" },
          body: JSON.stringify(payload.values),
        }
      );
      const data = await response.json();
      dispatch(createNewReceiver({ data }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const generateReceiver: any = createAsyncThunk(
  "receiver/generateReceiver",
  async (id: IdType, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://b2b-uploader.mircloud.host/api/registry/${id}/generate`,
        { method: "POST" }
      );
      const data = await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
