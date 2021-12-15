import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWarehouse: any = createAsyncThunk(
  "warehouse/getWarehouse",
  async (ref: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://b2b-uploader.mircloud.host/api/nova-poshta/warehouses?city_ref=${ref}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
