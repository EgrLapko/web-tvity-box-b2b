import React, { ChangeEvent, useState, useEffect } from "react";
import { Paper, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

interface StreetAutocompleteProps {
  options: any[];
  index: number;
  street: string;
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

const StreetAutocomplete: React.FC<StreetAutocompleteProps> = ({
  options,
  index,
  street,
  setFieldValue,
  onGetOptions,
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<{}>, inputValue: string) => {
    setInputValue(inputValue);
  };

  useEffect(() => {
    if (street !== "") {
      setInputValue(street);
    }
  }, [street, index, setFieldValue]);

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
      placeholder="Введіть адресу"
      name={`receivers.${index}.street`}
      variant="outlined"
      autoComplete="off"
      className={classes.root}
    />
  );

  return (
    <Autocomplete
      autoComplete
      filterSelectedOptions
      options={options}
      PaperComponent={Paper}
      value={street}
      filterOptions={filterOptions}
      getOptionLabel={getOptionLabel}
      onInputChange={handleInputChange}
      onChange={(e, value) => {
        setFieldValue(
          `receivers.${index}.street`,
          `${value?.streetsType} ${value?.description}`
        );
      }}
      renderInput={renderInput}
    />
  );
};

export default StreetAutocomplete;
