import React from "react";
import {
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ReceiversListContainer = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          SoftServe
        </Typography>
        <Typography variant="body2" align="center">
          Список отримувачів
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Прізвище</TableCell>
                <TableCell align="left">Ім’я</TableCell>
                <TableCell align="left">По батькові</TableCell>
                <TableCell align="left">Телефон</TableCell>
                <TableCell align="left">Тип доставки</TableCell>
                <TableCell align="left">Місто</TableCell>
                <TableCell align="left">
                  Відділення НП або адреса доставки
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*<TableRow key={row.name}>*/}
              {/*  <TableCell component="th" scope="row">*/}
              {/*    {row.name}*/}
              {/*  </TableCell>*/}
              {/*  <TableCell align="right">{row.calories}</TableCell>*/}
              {/*  <TableCell align="right">{row.fat}</TableCell>*/}
              {/*  <TableCell align="right">{row.carbs}</TableCell>*/}
              {/*  <TableCell align="right">{row.protein}</TableCell>*/}
              {/*</TableRow>*/}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ReceiversListContainer;
