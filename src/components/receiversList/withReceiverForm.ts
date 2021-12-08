import * as Yup from "yup";
import withFormSubmission from "components/common/withFormSubmission";

export interface ReceiverFormValues {
  last_name: string;
  first_name: string;
  fathers_name: string;
  tel: string;
  delivery_type: string;
  city: string;
  np_dep: string;
}

export interface ReceiverFormProps {
  receiver?: any;
  onCreate: () => void;
  onSubmit: (values: ReceiverFormValues) => void;
}

const withRegistryForm = withFormSubmission<
  ReceiverFormProps,
  ReceiverFormValues
>({
  enableReinitialize: true,
  validationSchema: Yup.object({
    last_name: Yup.string(),
    first_name: Yup.string(),
    fathers_name: Yup.string(),
    tel: Yup.string(),
    delivery_type: Yup.string(),
    city: Yup.string(),
    np_dep: Yup.string(),
  }),
  mapPropsToValues: ({ receiver }) => ({
    last_name: receiver?.name || "",
    first_name: receiver?.link || "",
    fathers_name: receiver?.fathers_name || "",
    tel: receiver?.description || "",
    delivery_type: receiver?.price || "",
    city: receiver?.weight || "",
    np_dep: receiver?.length || "",
  }),
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
});

export default withRegistryForm;
