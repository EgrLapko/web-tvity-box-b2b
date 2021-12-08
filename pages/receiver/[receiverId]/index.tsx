import React from "react";
import { Box, Container } from "@material-ui/core";
import ReceiverContainer from "components/receiversList/ReceiverContainer";

const ReceiverPage = () => {
  return (
    <Container maxWidth="xl">
      <Box mt={4}>
        <ReceiverContainer />
      </Box>
    </Container>
  );
};

export default ReceiverPage;
