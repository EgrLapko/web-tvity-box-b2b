import React from "react";
import { Box, Container } from "@material-ui/core";
import RegistryContainer from "components/registry/RegistryContainer";

const RegistryPage = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <RegistryContainer />
      </Box>
    </Container>
  );
};

export default RegistryPage;
