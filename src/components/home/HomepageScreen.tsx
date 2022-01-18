import React from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import { RegistryType } from "store/models";

import CreateButton from "components/common/CreateButton";
import RegistryCard from "./RegistryCard";

interface HomepageScreenProps {
  cards: any;
  isLoading: boolean;
  isCreating: boolean;
  onCreate: () => void;
  onGenerate: (link: string) => void;
  onDelete: (id: number) => void;
}

const HomepageScreen: React.FC<HomepageScreenProps> = ({
  cards,
  isLoading,
  isCreating,
  onGenerate,
  onCreate,
  onDelete,
}) => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12}>
            <CreateButton
              text="Створити нову чернетку"
              disabled={isCreating}
              onClick={onCreate}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {isLoading ? (
                <Grid item>
                  <CircularProgress />
                </Grid>
              ) : (
                cards &&
                cards.map((card: RegistryType) => {
                  return (
                    <Grid key={card.id} item xs={12}>
                      <RegistryCard
                        card={card}
                        onDelete={onDelete}
                        onGenerate={onGenerate}
                      />
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomepageScreen;
