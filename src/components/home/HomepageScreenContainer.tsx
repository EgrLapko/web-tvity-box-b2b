import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";

import {
  createRegistry,
  deleteRegistry,
  getRegistries,
} from "store/reducers/registriesReducer/registriesActions";

import HomepageScreen from "./HomepageScreen";

const HomepageScreenContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isCreating, registries } = useAppSelector(
    (state) => state.registriesReducer
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
    <HomepageScreen
      cards={registries?.data}
      isLoading={isLoading}
      isCreating={isCreating}
      onCreate={handleCreateRegistryCard}
      onDelete={handleDeleteRegistryCard}
    />
  );
};

export default HomepageScreenContainer;
