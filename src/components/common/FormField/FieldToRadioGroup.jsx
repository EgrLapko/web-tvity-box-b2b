import React from "react";
import { fieldToRadioGroup } from "formik-material-ui";

const FieldToRadioGroup = ({ RadioGroup, ...props }) => {
  const fieldProps = fieldToRadioGroup(props);
  if (!fieldProps.value) fieldProps.value = "";
  return <RadioGroup {...fieldProps} />;
};

export default FieldToRadioGroup;
