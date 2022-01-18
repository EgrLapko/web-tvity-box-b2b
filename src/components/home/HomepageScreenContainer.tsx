import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { Typography } from "@material-ui/core";
import {
  createRegistry,
  deleteRegistry,
  getRegistries,
} from "store/reducers/registriesReducer/registriesActions";
import { generateReceiver } from "store/reducers/receiverReducer/receiverActions";
import Layout from "components/common/Navbar/Layout";
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
    <Layout
      center={
        <Typography align="center" variant="h5">
          Чорнові реєстри для B2B-клієнтів
        </Typography>
      }
    >
      <HomepageScreen
        cards={registries?.data}
        isLoading={isLoading}
        isCreating={isCreating}
        onGenerate={handleGenerateReceiver}
        onCreate={handleCreateRegistryCard}
        onDelete={handleDeleteRegistryCard}
      />
    </Layout>
  );
};

export default HomepageScreenContainer;
