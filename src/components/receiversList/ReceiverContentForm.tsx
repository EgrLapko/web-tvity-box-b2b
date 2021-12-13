import React from "react";
import { Field, Form } from "formik";
import { MenuItem, TableCell, TableRow, TextField } from "@material-ui/core";
import { FieldToTextField } from "components/common/FormField";
import withReceiverForm, { ReceiverFormProps } from "./withReceiverForm";
import { makeStyles } from "@material-ui/core/styles";

const SelectProps = {
  displayEmpty: true,
};

const InputLabelProps = {
  shrink: true,
};

const useInputStyles = makeStyles({
  root: {
    borderRadius: 0,
    backgroundColor: "transparent",
  },
  notchedOutline: {
    "$root:not(.focused) &": {
      borderColor: "transparent !important",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  tableCell: {
    border: "1px solid #E8E8E8",
    padding: 8,
  },
}));

const ReceiverContentForm: React.FC<ReceiverFormProps> = ({ receiver }) => {
  const classes = useStyles();
  const inputClasses = useInputStyles();
  return (
    <TableRow>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        {receiver.id}
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Field
          placeholder="Введіть прізвище *"
          fullWidth
          name="last_name"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
          InputProps={{
            classes: inputClasses,
          }}
        />
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Field
          placeholder="Введіть ім’я *"
          fullWidth
          name="first_name"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
          InputProps={{
            classes: inputClasses,
          }}
        />
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Field
          placeholder="Введіть по батькові"
          fullWidth
          name="patronymic"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
          InputProps={{
            classes: inputClasses,
          }}
        />
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Field
          placeholder="+380XXXXXXXXX*"
          fullWidth
          name="phone"
          variant="outlined"
          component={FieldToTextField}
          TextField={TextField}
          InputProps={{
            classes: inputClasses,
          }}
        />
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Field
          label
          fullWidth
          variant="outlined"
          name="delivery_type"
          component={FieldToTextField}
          TextField={TextField}
          InputProps={{
            classes: inputClasses,
          }}
          select
          SelectProps={SelectProps}
          InputLabelProps={InputLabelProps}
        >
          <MenuItem>Лапко Єгор Олександрович</MenuItem>
          <MenuItem>Гаврилюк Михайло Михайлович</MenuItem>
          <MenuItem>Златопуп Оксан Валерйович</MenuItem>
        </Field>
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
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
          InputProps={{
            classes: inputClasses,
          }}
        >
          <MenuItem>Київ</MenuItem>
          <MenuItem>Не Київ</MenuItem>
          <MenuItem>Нє Київ</MenuItem>
        </Field>
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Field
          label
          fullWidth
          variant="outlined"
          name="warehouse"
          placeholder="Введіть номер відділення Нової Пошти *"
          component={FieldToTextField}
          TextField={TextField}
          select
          SelectProps={SelectProps}
          InputLabelProps={InputLabelProps}
          InputProps={{
            classes: inputClasses,
          }}
        >
          <MenuItem>2</MenuItem>
          <MenuItem>5</MenuItem>
          <MenuItem>10</MenuItem>
        </Field>
      </TableCell>
    </TableRow>
  );
};

export default withReceiverForm(ReceiverContentForm);
