import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";

import { RegistryType } from "store/models";

import CreateRegistryCardButton from "./CreateRegistryCardButton";
import RegistryCard from "./RegistryCard";

interface HomepageScreenProps {
  cards: any;
  onCreate: () => void;
  onDelete: (id: number) => void;
}

const HomepageScreen: React.FC<HomepageScreenProps> = ({
  cards,
  onCreate,
  onDelete,
}) => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Grid container spacing={6} justify="center">
          <Grid item xs={12}>
            <Typography align="center" variant="h5">
              Чорнові реєстри для B2B-клієнтів
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <CreateRegistryCardButton onClick={onCreate} />
              </Grid>
              {cards.map((card: RegistryType) => {
                return (
                  <Grid key={card.id} item xs={12}>
                    <RegistryCard card={card} onDelete={onDelete} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomepageScreen;
