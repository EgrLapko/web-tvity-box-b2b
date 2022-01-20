import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import {
  CircularProgress,
  Grid,
  Typography,
  Container,
  Box,
  Paper,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  getRegistry,
  updateRegistry,
} from "store/reducers/registryReducer/registryActions";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import Layout from "components/common/Navbar/Layout";
import AbsoluteLoader from "components/common/AbsoluteLoader";
import RegistryForm from "./RegistryForm";

const useStyles = makeStyles((theme) => ({
  circleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    borderRadius: "50%",
    width: 34,
    height: 34,
    border: "1px solid #E4443A",
    color: "#E4443A",
    textAlign: "center",
    padding: 6,
    margin: 8,
  },
  circleActive: {
    background: "#E4443A",
    color: "white",
  },
  successPaper: {
    boxShadow: "unset",
    borderRadius: 12,
    border: "1px solid #EFEFEF",
    padding: theme.spacing(5, 5, 4),
  },
}));

const RegistryContainer = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isLoading, isUpdating, registry } = useAppSelector(
    (state) => state.registryReducer
  );

  const showSuccess = false;

  const handleSubmit = useCallback(
    (values: any) => {
      dispatch(updateRegistry({ values, id: router.query.registryId }));
    },
    [dispatch, router.query.registryId]
  );

  const renderCenter = () => {
    return (
      <div className={classes.circleContainer}>
        <div className={clsx(classes.circle, classes.circleActive)}>1</div>
        <div className={clsx(classes.circle)}>2</div>
      </div>
    );
  };

  useEffect(() => {
    if (router.query.registryId) {
      dispatch(getRegistry(router.query.registryId));
    }
  }, [dispatch, router.query.registryId]);

  return (
    <Layout center={renderCenter()}>
      <Container maxWidth="md">
        <Box mt={4}>
          <Grid container spacing={4} justify="center">
            {isUpdating && <AbsoluteLoader />}
            <Grid item xs={12}>
              <Typography align="center" variant="h5">
                Вкажіть дані для накладних
              </Typography>
            </Grid>
            {showSuccess && (
              <Grid item xs={10}>
                <Paper className={classes.successPaper}>
                  <Grid
                    container
                    spacing={2}
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item md={6} xs={12}>
                      <Typography align="center" variant="h5">
                        Реєстр {registry?.name} на 120 накладних успішно
                        створено!
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button color="primary" variant="contained">
                        Готово
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            )}
            {isLoading ? (
              <Grid item>
                <CircularProgress />
              </Grid>
            ) : (
              <Grid item xs={10}>
                <RegistryForm
                  registry={registry}
                  onSubmit={handleSubmit}
                  isSending={isUpdating}
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default RegistryContainer;
