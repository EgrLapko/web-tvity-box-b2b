import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registryReducer from "./reducers/RegistrySlice";

const rootReducer = combineReducers({ registryReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
