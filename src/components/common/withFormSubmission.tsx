import React, { useEffect, useRef } from "react";
import {
  ComponentDecorator,
  FormikConfig,
  FormikProps,
  FormikValues,
  withFormik,
  WithFormikConfig,
} from "formik";

export interface IFormSubmissionProps {
  isSending?: boolean;
  resetAfterSending?: boolean;
}

export type MergedProps<
  OuterProps extends object,
  Values extends FormikValues
> = OuterProps & Omit<FormikProps<Values>, "setSubmitting">;

export type OwnProps<
  OuterProps extends object,
  Values extends FormikValues
> = OuterProps & IFormSubmissionProps & Pick<FormikConfig<Values>, "innerRef">;

const withFormSubmission =
  <OuterProps extends object, Values extends FormikValues, Payload = Values>(
    config: WithFormikConfig<OuterProps & IFormSubmissionProps, Values, Payload>
  ): ComponentDecorator<
    OwnProps<OuterProps, Values>,
    MergedProps<OuterProps, Values>
  > =>
  (Component) =>
    withFormik(config)((props) => {
      const {
        isSending = false,
        resetAfterSending = false,
        setSubmitting,
        resetForm,
        ...rest
      } = props;
      const ref = useRef(isSending);
      const isSubmitting = ref.current;

      useEffect(() => {
        if (isSending !== isSubmitting) {
          ref.current = isSending;
          setSubmitting(isSending);
          if (resetAfterSending && !isSending) {
            resetForm();
          }
        }
      }, [
        isSending,
        isSubmitting,
        setSubmitting,
        resetForm,
        resetAfterSending,
      ]);

      return <Component {...(rest as any)} resetForm={resetForm} />;
    });

export default withFormSubmission;
