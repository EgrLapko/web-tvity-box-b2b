import { FormikProps, FormikValues } from "formik";

export type MergedProps<
  OuterProps extends object,
  Values extends FormikValues
> = OuterProps &
  Omit<
    FormikProps<Values>,
    "submitForm" | "setSubmitting" | "isSubmitting" | "submitCount"
  > & {
    disabled?: boolean;
  };
