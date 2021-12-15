import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCities: any = createAsyncThunk(
  "receiver/getReceiver",
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://b2b-uploader.mircloud.host/api/nova-poshta/cities?name=${city}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
