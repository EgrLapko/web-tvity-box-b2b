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

const useInputStyles = makeStyles({
  root: {
    borderRadius: 0,
    backgroundColor: "red",
  },
  notchedOutline: {
    "$root:not(.focused) &": {
      borderColor: "red !important",
    },
  },
});

const CitiesAutocomplete: React.FC<CitiesAutocompleteProps> = ({
  options,
  city,
  index,
  setFieldValue,
  onSetCityRef,
  onGetOptions,
}) => {
  const inputClasses = useInputStyles();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<{}>, inputValue: string) => {
    setInputValue(inputValue);
    console.log("INPUT VALUE", inputValue);
  };

  useEffect(() => {
    if (city !== "") {
      setInputValue(city);
    }
  }, [city, index, setFieldValue]);

  console.log("CITY", city);
  console.log("INPUT VALUE", inputValue);

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
      placeholder="Введіть місто *"
      name={`receivers.${index}.city`}
      variant="outlined"
      autoComplete="off"
    />
  );

  return (
    <Autocomplete
      autoComplete
      filterSelectedOptions
      // value={inputValue}
      options={options}
      PaperComponent={Paper}
      getOptionLabel={(option) => `${option?.present}`}
      onInputChange={handleInputChange}
      onChange={(e, value) => {
        setFieldValue(`receivers.${index}.city`, value?.present);
        onSetCityRef(value?.deliveryCity);
      }}
      renderInput={renderInput}
    />
  );
};

export default CitiesAutocomplete;
