import { createAsyncThunk } from "@reduxjs/toolkit";
import { IdType } from "store/models";

export const getRegistry: any = createAsyncThunk(
  "registry/getRegistry",
  async (id: IdType, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://tviy.tech/api/registry/${id}/edit`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateRegistry: any = createAsyncThunk(
  "registry/updateRegistry",
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://tviy.tech/api/registry/${payload.id}/update`,
        {
          method: "PUT",
          headers: { "Content-type": "applications/json;charset=UTF-8" },
          body: JSON.stringify(payload.values),
        }
      ).then((response) => response.json());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
