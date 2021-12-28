import React, { ChangeEvent, useState, useEffect } from "react";
import { Paper, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

interface CitiesAutocompleteProps {
  options: any[];
  index: number;
  onGetOptions: (value: string) => void;
  setFieldValue: (name: string, value: any) => void;
}

const StreetAutocomplete: React.FC<CitiesAutocompleteProps> = ({
  options,
  index,
  setFieldValue,
  onGetOptions,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<{}>, inputValue: string) => {
    setInputValue(inputValue);
  };

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
    />
  );

  return (
    <Autocomplete
      autoComplete
      filterSelectedOptions
      options={options}
      PaperComponent={Paper}
      // value={inputValue as any}
      getOptionLabel={(option) =>
        `${option?.streetsType} ${option?.description}`
      }
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
