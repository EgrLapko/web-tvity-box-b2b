import React from "react";
import { fieldToTextField } from "formik-material-ui";

const FieldToTextField = ({
  TextField,
  label,
  placeholder,
  namespace,
  context,
  ...props
}) => {
  const { form } = props;
  const { name, onChange, onBlur, helperText, ...fieldProps } =
    fieldToTextField(props);

  if (fieldProps.value === undefined || fieldProps.value === null)
    fieldProps.value = "";

  const handleChange = (e) => {
    if (e instanceof Event) return onChange(e);

    const execute = onChange(name);
    if (typeof execute === "function") {
      execute(e);
    }
  };

  const handleBlur = (e) => {
    if (e instanceof Event) return onBlur(e);

    form.setFieldTouched(name, true);
  };

  return (
    <TextField
      {...fieldProps}
      name={name}
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default FieldToTextField;
