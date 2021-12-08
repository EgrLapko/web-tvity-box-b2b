import React from "react";
import {
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateButton from "components/common/CreateButton";
import withReceiverForm, { ReceiverFormProps } from "./withReceiverForm";
import StickyBottomContent from "../common/StickyBottom/StickyBottomContent";
import Button from "../common/Button";
import { Field, Form } from "formik";
import { FieldToTextField } from "../common/FormField";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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

const SelectProps = {
  displayEmpty: true,
};

const InputLabelProps = {
  shrink: true,
};

const ReceiverContentForm: React.FC<ReceiverFormProps> = ({ onCreate }) => {
  const classes = useStyles();

  const handleClick = () => {
    onCreate();
  };
  return (
    <Form>
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
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell />
                  {headTableRows.map((item) => {
                    return (
                      <TableCell key={item} align="left">
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ padding: 8 }} component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell style={{ padding: 8 }} component="th" scope="row">
                    <Field
                      placeholder="Введіть прізвище *"
                      fullWidth
                      name="last_name"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                    />
                  </TableCell>
                  <TableCell style={{ padding: 8 }} component="th" scope="row">
                    <Field
                      placeholder="Введіть ім’я *"
                      fullWidth
                      name="first_name"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                    />
                  </TableCell>
                  <TableCell style={{ padding: 8 }} component="th" scope="row">
                    <Field
                      placeholder="Введіть по батькові"
                      fullWidth
                      name="fathers_name"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                    />
                  </TableCell>
                  <TableCell style={{ padding: 8 }} component="th" scope="row">
                    <Field
                      placeholder="+380XXXXXXXXX*"
                      fullWidth
                      name="tel"
                      variant="outlined"
                      component={FieldToTextField}
                      TextField={TextField}
                    />
                  </TableCell>
                  <TableCell style={{ padding: 8 }} component="th" scope="row">
                    <Field
                      label
                      fullWidth
                      variant="outlined"
                      name="delivery_type"
                      component={FieldToTextField}
                      TextField={TextField}
                      select
                      SelectProps={SelectProps}
                      InputLabelProps={InputLabelProps}
                    >
                      <MenuItem>Лапко Єгор Олександрович</MenuItem>
                      <MenuItem>Гаврилюк Михайло Михайлович</MenuItem>
                      <MenuItem>Златопуп Оксан Валерйович</MenuItem>
                    </Field>
                  </TableCell>
                  <TableCell style={{ padding: 8 }} component="th" scope="row">
                    <Field
                      label
                      fullWidth
                      variant="outlined"
                      name="city"
                      placeholder="Введіть місто *"
                      component={FieldToTextField}
                      TextField={TextField}
                      select
                      SelectProps={SelectProps}
                      InputLabelProps={InputLabelProps}
                    >
                      <MenuItem>Київ</MenuItem>
                      <MenuItem>Не Київ</MenuItem>
                      <MenuItem>Нє Київ</MenuItem>
                    </Field>
                  </TableCell>
                  <TableCell style={{ padding: 8 }} component="th" scope="row">
                    <Field
                      label
                      fullWidth
                      variant="outlined"
                      name="city"
                      placeholder="Введіть номер відділення Нової Пошти *"
                      component={FieldToTextField}
                      TextField={TextField}
                      select
                      SelectProps={SelectProps}
                      InputLabelProps={InputLabelProps}
                    >
                      <MenuItem>2</MenuItem>
                      <MenuItem>5</MenuItem>
                      <MenuItem>10</MenuItem>
                    </Field>
                  </TableCell>
                </TableRow>
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
    </Form>
  );
};

export default withReceiverForm(ReceiverContentForm);
