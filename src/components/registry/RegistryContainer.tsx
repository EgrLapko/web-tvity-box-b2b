import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgress, Grid, Typography } from "@material-ui/core";

import { getRegistry, updateRegistry } from "store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import RegistryForm from "./RegistryForm";

const RegistryContainer = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isLoading, registry } = useAppSelector(
    (state) => state.registryReducer
  );

  const handleSubmit = useCallback(
    (values: any) => {
      dispatch(updateRegistry({ values, id: router.query.registryId }));
    },
    [dispatch, router.query.registryId]
  );

  useEffect(() => {
    if (router.query.registryId) {
      dispatch(getRegistry(router.query.registryId));
    }
  }, [dispatch, router.query.registryId]);

  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h5">
          Вкажіть дані для накладних
        </Typography>
      </Grid>
      {isLoading ? (
        <Grid item>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid item xs={10}>
          <RegistryForm registry={registry} onSubmit={handleSubmit} />
        </Grid>
      )}
    </Grid>
  );
};

export default RegistryContainer;
