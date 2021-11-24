import { AppDispatch } from "../store";
import axios from "axios";
import { GeneralListType, RegistryType } from "../models";
import { registrySlice } from "./RegistrySlice";

const getRegistriesUrl = "https://b2b-uploader.mircloud.host/api/registry";

export const fetchRegistries = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(registrySlice.actions.registriesFetchingRequest());
    const response = await axios.get<GeneralListType<RegistryType>>(
      getRegistriesUrl
    );
    dispatch(registrySlice.actions.registriesFetchingSuccess(response.data));
  } catch (e) {
    dispatch(registrySlice.actions.registriesFetchingError(e.message));
  }
};

export const createRegistries = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(registrySlice.actions.registriesPostRequest());
    const response = await axios.post<GeneralListType<RegistryType>>(
      getRegistriesUrl
    );
    dispatch(registrySlice.actions.registriesPostSuccess(response.data));
  } catch (e) {
    dispatch(registrySlice.actions.registriesPostError(e.message));
  }
};

export const deleteRegistries =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(registrySlice.actions.registriesDeleteRequest());
      const response = await axios.delete<GeneralListType<RegistryType>>(
        `https://b2b-uploader.mircloud.host/api/registry/${id}/update`
      );
      dispatch(registrySlice.actions.registriesDeleteSuccess(response.data));
    } catch (e) {
      dispatch(registrySlice.actions.registriesDeleteError(e.message));
    }
  };
