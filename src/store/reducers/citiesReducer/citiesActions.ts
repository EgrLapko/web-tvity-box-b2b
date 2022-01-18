import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCities: any = createAsyncThunk(
  "cities/getCities",
  async (city: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://tviy.tech/api/nova-poshta/cities?name=${city}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
