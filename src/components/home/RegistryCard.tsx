import React from "react";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { routes } from "utils/routing";
import LinkComponent from "components/common/LinkComponent";

interface RegistryCardProps {
  card: any;
  onDelete: (id: number) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    boxShadow: "none",
    border: "1px solid #E8E8E8",
    borderRadius: 12,
  },
  textSuccess: {
    color: "#33A460",
  },
}));

const RegistryCard: React.FC<RegistryCardProps> = ({ card, onDelete }) => {
  const { id, name, link, amountOfReceivers } = card;
  const classes = useStyles();

  const handleDelete = () => {
    onDelete(card.id);
  };

  const hasReceivers = amountOfReceivers > 0;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">{name}</Typography>
                </Grid>
                <Grid item xs>
                  <Grid container spacing={3}>
                    <Grid item>
                      <Typography
                        variant="subtitle2"
                        className={hasReceivers ? classes.textSuccess : ""}
                        color={!hasReceivers ? "primary" : "textPrimary"}
                      >
                        {length} накладних
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        Статичні дані введені
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container spacing={1} justify="flex-end">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Згенерувати
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDelete}
                  >
                    Видалити
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">
                    <FileCopyOutlinedIcon />
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={LinkComponent}
                    {...routes.registry(id)}
                  >
                    <ExitToAppIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField variant="outlined" fullWidth value={link} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegistryCard;
