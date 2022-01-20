import React, { ChangeEvent, useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

interface WarehouseAutocompleteProps {
  options: any[];
  index: number;
  warehouse: string;
  onGetOptions: (value: string) => void;
  setFieldValue: (name: string, value: any) => void;
}

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "transparent",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "unset",
    },
  },
});

const getOptionLabel = (option: any) => {
  if (typeof option === "string") return option;
  return option.description;
};

const filterOptions = (option: any) => option;

const WarehouseAutocomplete: React.FC<WarehouseAutocompleteProps> = ({
  options,
  index,
  warehouse,
  setFieldValue,
  onGetOptions,
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<{}>, inputValue: string) => {
    setInputValue(inputValue);
  };

  useEffect(() => {
    if (warehouse !== "") {
      setInputValue(warehouse);
    }
  }, [warehouse, index, setFieldValue]);

  useEffect(() => {
    let timeout: any;
    if (inputValue.length > 1) {
      timeout = setTimeout(() => {
        onGetOptions(inputValue);
      }, 300);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue, onGetOptions]);

  const renderInput = (params: any) => (
    <TextField
      {...params}
      placeholder="Введіть номер відділення Нової Пошти *"
      name={`receivers.${index}.warehouse`}
      variant="outlined"
      className={classes.root}
    />
  );

  return (
    <Autocomplete
      autoComplete
      filterSelectedOptions
      options={options}
      value={warehouse}
      filterOptions={filterOptions}
      getOptionLabel={getOptionLabel}
      onInputChange={handleInputChange}
      onChange={(e, value) => {
        setFieldValue(`receivers.${index}.warehouse`, value.description);
        setFieldValue(`receivers.${index}.warehouseNumber`, value.number);
      }}
      renderInput={renderInput}
    />
  );
};

export default WarehouseAutocomplete;
