import React, { useState } from "react";
import clsx from "clsx";
import { Field, useFormikContext } from "formik";
import CloseIcon from "@material-ui/icons/Close";
import {
  MenuItem,
  TableCell,
  TableRow,
  TextField,
  Grid,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FieldToTextField } from "components/common/FormField";
import CitiesAutocomplete from "components/common/CitiesAutocomplete";
import WarehouseAutocomplete from "components/common/WarehouseAutocomplete";
import StreetAutocomplete from "components/common/StreetAutocomplete";

interface ReceiverContentFormProps {
  index: number;
  receiver: any;
  onRemove: (index: number) => void;
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
  streetCell: {
    width: "50%",
  },
  houseCell: {
    width: "25%",
  },
  flatCell: {
    width: "25%",
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

const ReceiverFormContent: React.FC<ReceiverContentFormProps> = ({
  index,
  receiver,
  onRemove,
}) => {
  const classes = useStyles();
  const inputClasses = useInputStyles();

  const { setFieldValue } = useFormikContext();

  const [cityRef, setCityRef] = useState("");

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
          name={`receivers.${index}.lastName`}
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
          name={`receivers.${index}.firstName`}
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
          name={`receivers.${index}.deliveryType`}
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
        <CitiesAutocomplete
          index={index}
          setFieldValue={setFieldValue}
          onSetCityRef={setCityRef}
          city={receiver.city}
        />
      </TableCell>
      {receiver?.deliveryType !== "address" ? (
        <TableCell component="th" scope="row" className={classes.tableCell}>
          <WarehouseAutocomplete
            index={index}
            setFieldValue={setFieldValue}
            cityRef={cityRef}
          />
        </TableCell>
      ) : (
        <div>
          <TableCell
            component="th"
            scope="row"
            className={clsx(classes.tableCell, classes.streetCell)}
          >
            <StreetAutocomplete
              index={index}
              setFieldValue={setFieldValue}
              cityRef={cityRef}
            />
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            className={clsx(classes.tableCell, classes.houseCell)}
          >
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
          <TableCell
            component="th"
            scope="row"
            className={clsx(classes.tableCell, classes.flatCell)}
          >
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

export default ReceiverFormContent;
