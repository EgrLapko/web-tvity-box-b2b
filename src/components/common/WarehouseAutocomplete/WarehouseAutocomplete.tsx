import React, { ChangeEvent, useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

interface CitiesAutocompleteProps {
  options: any[];
  index: number;
  onGetOptions: (value: string) => void;
  setFieldValue: (name: string, value: any) => void;
}

const WarehouseAutocomplete: React.FC<CitiesAutocompleteProps> = ({
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
      placeholder="Введіть номер відділення Нової Пошти *"
      name={`receivers.${index}.warehouse`}
      variant="outlined"
    />
  );

  return (
    <Autocomplete
      autoComplete
      filterSelectedOptions
      options={options}
      // value={inputValue as any}
      getOptionLabel={(option) => `${option?.description}`}
      onInputChange={handleInputChange}
      onChange={(e, value) => {
        setFieldValue(`receivers.${index}.warehouse`, value.description);
      }}
      renderInput={renderInput}
    />
  );
};

export default WarehouseAutocomplete;
