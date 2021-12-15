import React from "react";
import { Field } from "formik";
import CloseIcon from "@material-ui/icons/Close";
import {
  MenuItem,
  TableCell,
  TableRow,
  TextField,
  IconButton,
  Grid,
} from "@material-ui/core";
import { FieldToTextField } from "components/common/FormField";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

interface ReceiverContentFormProps {
  receiver: any;
  index: number;
  onRemove: (index: any) => void;
}

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
  root: {
    "&:hover $action": {
      opacity: 1,
      display: "flex",
    },
    "&:hover $counter": {
      display: "none",
    },
  },
  tableCell: {
    border: "1px solid #E8E8E8",
    padding: 8,
  },
  buttonCell: {
    width: "5%",
  },
  action: {
    opacity: 0,
    transition: ".2s",
    display: "none",
  },
  counter: {
    display: "flex",
  },
}));

const ReceiverContentForm: React.FC<ReceiverContentFormProps> = ({
  receiver,
  index,
  onRemove,
}) => {
  const classes = useStyles();
  const inputClasses = useInputStyles();

  const { delivery_type } = receiver;

  const handleRemoveItem = () => {
    onRemove(index);
  };

  return (
    <TableRow className={classes.root}>
      <TableCell
        component="th"
        scope="row"
        className={clsx(classes.tableCell, classes.buttonCell)}
      >
        <Grid container justify="center" alignItems="center">
          <Grid item className={classes.counter}>
            {index + 1}
          </Grid>
          <Grid item className={classes.action}>
            <IconButton color="primary" onClick={handleRemoveItem}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Field
          placeholder="Введіть прізвище *"
          fullWidth
          name={`receivers.${index}.last_name`}
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
          name={`receivers.${index}.first_name`}
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
          name={`receivers.${index}.patronymic`}
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
          name={`receivers.${index}.phone`}
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
          name={`receivers.${index}.delivery_type`}
          component={FieldToTextField}
          TextField={TextField}
          InputProps={{
            classes: inputClasses,
          }}
          select
          SelectProps={SelectProps}
          InputLabelProps={InputLabelProps}
        >
          <MenuItem value="address">На адресу</MenuItem>
          <MenuItem value="branch">На відділення</MenuItem>
        </Field>
      </TableCell>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Field
          label
          fullWidth
          variant="outlined"
          name={`receivers.${index}.city`}
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
      {delivery_type !== "address" ? (
        <TableCell component="th" scope="row" className={classes.tableCell}>
          <Field
            label
            fullWidth
            variant="outlined"
            name={`receivers.${index}.warehouse`}
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
      ) : (
        <div>
          <TableCell component="th" scope="row" className={classes.tableCell}>
            <Field
              label
              fullWidth
              variant="outlined"
              name={`receivers.${index}.street`}
              placeholder="Введіть адресу"
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
          <TableCell component="th" scope="row" className={classes.tableCell}>
            <Field
              placeholder="Номер"
              fullWidth
              name={`receivers.${index}.house`}
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
              placeholder="Квартира"
              fullWidth
              name={`receivers.${index}.flat`}
              variant="outlined"
              component={FieldToTextField}
              TextField={TextField}
              InputProps={{
                classes: inputClasses,
              }}
            />
          </TableCell>
        </div>
      )}
    </TableRow>
  );
};

export default ReceiverContentForm;
