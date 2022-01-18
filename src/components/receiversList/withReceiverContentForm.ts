import * as Yup from "yup";
import { MergedProps } from "utils/form";
import withFormSubmission from "components/common/withFormSubmission";

export type ReceiverType = {
  id: number;
  lastName: string;
  firstName: string;
  patronymic: string;
  phone: string;
  deliveryType: string;
  city: string;
  street: string;
  flat: string;
  house: string;
  warehouse: string;
  createdAt: string;
  updatedAt: string;
};

export interface ReceiverContentFormValues {
  receivers: ReceiverType[] | any[];
}

export interface ReceiverContentFormProps {
  receiversList?: ReceiverType[];
  isLoading: boolean;
  onSubmit: (values: ReceiverContentFormValues) => void;
}

export type ReceiverFormComponentProps = MergedProps<
  ReceiverContentFormProps,
  ReceiverContentFormValues
>;

const withReceiverContentForm = withFormSubmission<
  ReceiverContentFormProps,
  ReceiverContentFormValues
>({
  validationSchema: Yup.object({
    receivers: Yup.array(),
    // receivers: Yup.array().of(
    //     Yup.object().shape({
    //       lastName: Yup.string().required("Last Name required"),
    //       firstName: Yup.string().required("First Name required"),
    //       patronymic: Yup.string(),
    //       phone: Yup.string(),
    //       deliveryType: Yup.string(),
    //       city: Yup.string(),
    //       street: Yup.string(),
    //       flat: Yup.string(),
    //       house: Yup.string(),
    //       warehouse: Yup.string(),
    //     })
    // ),
  }),
  mapPropsToValues: ({ receiversList }) => ({
    receivers: receiversList || [],
  }),
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
});

export default withReceiverContentForm;
