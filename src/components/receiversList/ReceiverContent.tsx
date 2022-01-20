import React, { useEffect } from "react";
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
import { Form, FieldArray, useFormikContext } from "formik";
import ReceiverFormContainer from "./ReceiverFormContainer";
import withReceiverContentForm, {
  ReceiverContentFormValues,
  ReceiverFormComponentProps,
} from "./withReceiverContentForm";

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
  { key: "", style: { width: 80 } },
  { key: "Прізвище", style: { width: 180 } },
  { key: "Ім'я", style: { width: 180 } },
  { key: "По батькові", style: { width: 180 } },
  { key: "Телефон", style: { width: 170 } },
  { key: "Тип доставки", style: { width: 180 } },
  { key: "Місто", style: { width: 350 } },
  { key: "Відділення НП або адреса доставки", style: { width: 350 } },
];

const receiverItem = {
  lastName: "",
  firstName: "",
  patronymic: "",
  phone: "",
  deliveryType: "",
  street: "",
  city: "",
  warehouse: "",
};

const ReceiverContent: React.FC<ReceiverFormComponentProps> = ({
  title,
  receiversList,
  isLoading,
}) => {
  const classes = useStyles();
  const { values, setFieldValue } =
    useFormikContext<ReceiverContentFormValues>();

  useEffect(() => {
    setFieldValue("receivers", receiversList || []);
  }, [setFieldValue, receiversList]);

  console.log(values);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        {title && (
          <Typography variant="h5" align="center">
            {title}
          </Typography>
        )}
        <Typography variant="body2" align="center">
          Список отримувачів
        </Typography>
      </Grid>

      {isLoading ? (
        <Grid item>
          <CircularProgress />
        </Grid>
      ) : (
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
                    <TableContainer component={Paper} className={classes.root}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            {headTableRows.map((item) => {
                              return (
                                <TableCell
                                  key={item.key}
                                  align="left"
                                  style={item.style}
                                  className={classes.tableCell}
                                >
                                  {item.key}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {values.receivers.length > 0 &&
                            values.receivers.map((receiver, index) => (
                              <ReceiverFormContainer
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

                  <StickyBottomContent position="fixed" justifyContent="center">
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
    </Grid>
  );
};

export default withReceiverContentForm(ReceiverContent);
