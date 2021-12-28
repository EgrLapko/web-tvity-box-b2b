import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registriesReducer from "./reducers/registriesReducer/registriesSlice";
import registryReducer from "./reducers/registryReducer/registrySlice";
import receiverReducer from "./reducers/receiverReducer/receiverSlice";
import citiesReducer from "./reducers/citiesReducer/citiesSlice";
import warehouseReducer from "./reducers/warehouseReducer/warehouseSlice";
import streetReducer from "./reducers/streetReducer/streetSlice";

const rootReducer = combineReducers({
  registriesReducer,
  registryReducer,
  receiverReducer,
  citiesReducer,
  warehouseReducer,
  streetReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
