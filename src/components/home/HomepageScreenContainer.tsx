import React, { useCallback, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import {
  createRegistry,
  deleteRegistry,
  getRegistries,
} from "store/reducers/ActionCreators";

import HomepageScreen from "./HomepageScreen";

const HomepageScreenContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading, registries } = useAppSelector(
    (state) => state.registryReducer
  );

  const handleCreateRegistryCard = () => {
    dispatch(createRegistry());
  };

  const handleDeleteRegistryCard = useCallback(
    (id: any) => {
      dispatch(deleteRegistry(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getRegistries());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CircularProgress />}
      <HomepageScreen
        cards={registries?.data}
        onCreate={handleCreateRegistryCard}
        onDelete={handleDeleteRegistryCard}
      />
    </>
  );
};

export default HomepageScreenContainer;
