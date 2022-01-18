import { createAsyncThunk } from "@reduxjs/toolkit";
import { createNewRegistry, removeRegistry } from "./registriesSlice";
import { IdType } from "store/models";

export const getRegistries: any = createAsyncThunk(
  "registries/fetchRegistries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://tviy.tech/api/registry"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteRegistry: any = createAsyncThunk(
  "registries/deleteRegistry",
  async (id: IdType, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://tviy.tech/api/registry/${id}`,
        { method: "DELETE" }
      );
      dispatch(removeRegistry({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createRegistry: any = createAsyncThunk(
  "registries/postRegistry",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        "https://tviy.tech/api/registry",
        { method: "POST" }
      );
      const data = await response.json();
      dispatch(createNewRegistry({ data }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
