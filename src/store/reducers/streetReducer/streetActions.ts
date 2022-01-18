import { createAsyncThunk } from "@reduxjs/toolkit";

type GetStreetParamsType = {
  cityRef: string;
  value: string;
};

export const getStreet: any = createAsyncThunk(
  "street/getStreet",
  async (params: GetStreetParamsType, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://tviy.tech/api/nova-poshta/streets?city_ref=${params.cityRef}&name=${params.value}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
