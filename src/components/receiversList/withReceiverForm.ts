import * as Yup from "yup";
import withFormSubmission from "components/common/withFormSubmission";

export interface ReceiverFormValues {
  last_name: string;
  first_name: string;
  patronymic: string;
  phone: string;
  delivery_type: string;
  city: string;
  warehouse: string;
}

export interface ReceiverFormProps {
  key: any;
  receiver?: any;
  onSubmit: (values: ReceiverFormValues) => void;
}

const withReceiverForm = withFormSubmission<
  ReceiverFormProps,
  ReceiverFormValues
>({
  enableReinitialize: true,
  validationSchema: Yup.object({
    last_name: Yup.string(),
    first_name: Yup.string(),
    patronymic: Yup.string(),
    phone: Yup.string(),
    delivery_type: Yup.string(),
    city: Yup.string(),
    warehouse: Yup.string(),
  }),
  mapPropsToValues: ({ receiver }) => ({
    last_name: receiver?.last_name || "",
    first_name: receiver?.first_name || "",
    patronymic: receiver?.patronymic || "",
    phone: receiver?.phone || "",
    delivery_type: receiver?.delivery_type || "",
    city: receiver?.city || "",
    warehouse: receiver?.warehouse || "",
  }),
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
});

export default withReceiverForm;
