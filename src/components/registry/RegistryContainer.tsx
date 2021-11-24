import React from "react";
import RegistryForm from "./RegistryForm";
import { Grid, Typography } from "@material-ui/core";

const RegistryContainer = () => {
  const handleSubmit = () => {
    console.log("Form Submitted");
  };

  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={12}>
        <Typography align="center" variant="h5">
          Вкажіть дані для накладних
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <RegistryForm onSubmit={handleSubmit} />
      </Grid>
    </Grid>
  );
};

export default RegistryContainer;
