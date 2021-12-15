import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";

import {
  createRegistry,
  deleteRegistry,
  getRegistries,
} from "store/reducers/registriesReducer/registriesActions";
import { generateReceiver } from "store/reducers/receiverReducer/receiverActions";
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
  const handleGenerateReceiver = useCallback(
    (link: string) => {
      dispatch(generateReceiver(link));
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
      onGenerate={handleGenerateReceiver}
      onCreate={handleCreateRegistryCard}
      onDelete={handleDeleteRegistryCard}
    />
  );
};

export default HomepageScreenContainer;
