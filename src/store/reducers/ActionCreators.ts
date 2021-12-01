import { createNewRegistry, removeRegistry } from "./registrySlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

type IdType = string | number;

export const getRegistries: any = createAsyncThunk(
  "registries/fetchRegistries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://b2b-uploader.mircloud.host/api/registry"
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
        `https://b2b-uploader.mircloud.host/api/registry/${id}/update`,
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
        "https://b2b-uploader.mircloud.host/api/registry",
        { method: "POST" }
      );
      const data = await response.json();
      dispatch(createNewRegistry({ data }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
