import React from "react";
import {
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateButton from "components/common/CreateButton";
import StickyBottomContent from "components/common/StickyBottom/StickyBottomContent";
import Button from "components/common/Button";
import ReceiverContentForm from "./ReceiverContentForm";

interface ReceiverContentProps {
  receiversList: any[];
  isLoading: boolean;
  onCreate: () => void;
  onSubmit: () => void;
}

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    border: "1px solid #E8E8E8",
  },
});

const headTableRows = [
  "Прізвище",
  "Ім'я",
  "По батькові",
  "Телефон",
  "Тип доставки",
  "Місто",
  "Відділення НП або адреса доставки",
];

const ReceiverContent: React.FC<ReceiverContentProps> = ({
  receiversList,
  isLoading,
  onCreate,
  onSubmit,
}) => {
  const classes = useStyles();

  const handleClick = () => {
    onCreate();
  };

  const handleSubmit = () => {
    onSubmit();
  };

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
        <CreateButton text="Додати отримувача" onClick={handleClick} />
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell} />
                {headTableRows.map((item) => {
                  return (
                    <TableCell
                      key={item}
                      align="left"
                      className={classes.tableCell}
                    >
                      {item}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <Grid item>
                  <CircularProgress />
                </Grid>
              ) : (
                receiversList &&
                receiversList.map((receiver) => {
                  return (
                    <ReceiverContentForm
                      key={receiver.id}
                      receiver={receiver}
                      onSubmit={handleSubmit}
                    />
                  );
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <StickyBottomContent position="fixed" justifyContent="center">
        <Button variant="contained" color="primary" type="submit">
          Зберегти 1
        </Button>
      </StickyBottomContent>
    </Grid>
  );
};

export default ReceiverContent;
