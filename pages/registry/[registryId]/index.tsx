import React from "react";
import RegistryContainer from "components/registry/RegistryContainer";
import { Box, Container } from "@material-ui/core";
import { useRouter } from "next/router";

const RegistryPage = () => {
  const router = useRouter();
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <RegistryContainer />
      </Box>
    </Container>
  );
};

export default RegistryPage;
