import React, { useCallback, useEffect } from "react";
import HomepageScreen from "./HomepageScreen";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import {
  createRegistries,
  deleteRegistries,
  fetchRegistries,
} from "store/reducers/ActionCreators";
import { CircularProgress } from "@material-ui/core";

const HomepageScreenContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading, registries } = useAppSelector(
    (state) => state.registryReducer
  );

  const handleCreateRegistryCard = () => {
    dispatch(createRegistries());
  };

  const handleDeleteRegistryCard = useCallback(
    (id: any) => {
      dispatch(deleteRegistries(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchRegistries());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CircularProgress />}
      {registries.data && (
        <HomepageScreen
          cards={registries.data}
          onCreate={handleCreateRegistryCard}
          onDelete={handleDeleteRegistryCard}
        />
      )}
    </>
  );
};

export default HomepageScreenContainer;
