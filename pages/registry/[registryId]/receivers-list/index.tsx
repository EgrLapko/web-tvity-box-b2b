import React from "react";
import { Box, Container } from "@material-ui/core";
import ReceiversListContainer from "components/receiversList/ReceiversListContainer";

const ReceiverListPage = () => {
  return (
    <Container maxWidth="xl">
      <Box mt={4}>
        <ReceiversListContainer />
      </Box>
    </Container>
  );
};

export default ReceiverListPage;
