import React, { useState } from "react";
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
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

interface ReceiverContentProps {
  receiversList: any[];
  isLoading: boolean;
  onCreate: () => void;
  onSubmit: (values: any) => void;
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

const receiverItem = {
  last_name: "",
  first_name: "",
  patronymic: "",
  phone: "",
  delivery_type: "",
  city: "",
  warehouse: "",
};

const initialValues = {
  receivers: [receiverItem],
};

const ReceiverContent: React.FC<ReceiverContentProps> = ({
  receiversList,
  isLoading,
  onCreate,
  onSubmit,
}) => {
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

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="receivers">
              {({ remove, push }) => {
                const handleAddItem = () => {
                  push(receiverItem);
                };

                const handleRemoveItem = (index: any) => {
                  remove(index);
                };

                return (
                  <Grid container>
                    <Grid item xs={12}>
                      <CreateButton
                        text="Додати отримувача"
                        onClick={handleAddItem}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TableContainer
                        component={Paper}
                        className={classes.root}
                      >
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
                            {values.receivers.length > 0 &&
                              values.receivers.map((receiver, index) => (
                                <ReceiverContentForm
                                  key={index}
                                  receiver={receiver}
                                  index={index}
                                  onRemove={handleRemoveItem}
                                />
                              ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>

                    <StickyBottomContent
                      position="fixed"
                      justifyContent="center"
                    >
                      <Button variant="contained" color="primary" type="submit">
                        Зберегти {values.receivers.length}
                      </Button>
                    </StickyBottomContent>
                  </Grid>
                );
              }}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default ReceiverContent;
