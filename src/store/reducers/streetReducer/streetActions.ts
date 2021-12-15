import { createAsyncThunk } from "@reduxjs/toolkit";

type GetStreetParamsType = {
  city_ref: string;
  name: string;
};

export const getStreet: any = createAsyncThunk(
  "street/getStreet",
  async ({ city_ref, name }: GetStreetParamsType, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://b2b-uploader.mircloud.host/api/nova-poshta/streets?city_ref=${city_ref}&name=${name}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
