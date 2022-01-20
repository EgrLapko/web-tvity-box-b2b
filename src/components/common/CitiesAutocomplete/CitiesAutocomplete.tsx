import React, { ChangeEvent, useState, useEffect } from "react";
import { Paper, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

interface CitiesAutocompleteProps {
  options: any[];
  index: number;
  city: string;
  onGetOptions: (value: string) => void;
  onSetCityRef: (value: string) => void;
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
  return option.present;
};

const filterOptions = (option: any) => option;

const CitiesAutocomplete: React.FC<CitiesAutocompleteProps> = ({
  options,
  city,
  index,
  setFieldValue,
  onSetCityRef,
  onGetOptions,
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<{}>, inputValue: string) => {
    setInputValue(inputValue);
  };

  useEffect(() => {
    if (city !== "") {
      setInputValue(city);
    }
  }, [city, index, setFieldValue]);

  useEffect(() => {
    let timeout: any;
    if (inputValue?.length > 1) {
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
      placeholder="Введіть місто *"
      name={`receivers.${index}.city`}
      autoComplete="off"
      variant="outlined"
      className={classes.root}
    />
  );

  return (
    <Autocomplete
      autoComplete
      filterSelectedOptions
      value={city}
      options={options}
      PaperComponent={Paper}
      filterOptions={filterOptions}
      getOptionLabel={getOptionLabel}
      onInputChange={handleInputChange}
      onChange={(e, value) => {
        setFieldValue(`receivers.${index}.city`, value?.present);
        setFieldValue(`receivers.${index}.cityName`, value?.mainDescription);
        onSetCityRef(value?.deliveryCity);
      }}
      renderInput={renderInput}
    />
  );
};

export default CitiesAutocomplete;
