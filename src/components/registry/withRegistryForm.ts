import * as Yup from "yup";
import withFormSubmission from "components/common/withFormSubmission";

export interface IValues {
  registry_name: string;
  customer_link: string;
  type: string;
  package_description: string;
  sum: number;
  weight: number;
  length: number;
  width: number;
  height: number;
  sender_contacts: string;
  delivery_payer: string;
  payment_type: string;
  send_location: string;
  receiver: string;
  send_date: string;
}

export interface IProps {
  onSubmit: (values: IValues) => void;
}

const withDetailsForm = withFormSubmission<IProps, IValues>({
  enableReinitialize: true,
  validationSchema: Yup.object({
    registry_name: Yup.string(),
    customer_link: Yup.string(),
    type: Yup.string(),
    package_description: Yup.string(),
    sum: Yup.number(),
    weight: Yup.number(),
    length: Yup.number(),
    width: Yup.number(),
    height: Yup.number(),
    sender_contacts: Yup.string(),
    delivery_payer: Yup.string(),
    payment_type: Yup.string(),
    send_location: Yup.string(),
    receiver: Yup.string(),
    send_date: Yup.string(),
  }),
  mapPropsToValues: () => ({
    registry_name: "",
    customer_link: "",
    type: "cargo",
    package_description: "",
    sum: 0,
    weight: 0,
    length: 0,
    width: 0,
    height: 0,
    sender_contacts: "",
    delivery_payer: "",
    payment_type: "",
    send_location: "",
    receiver: "",
    send_date: "",
  }),
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
});

export default withDetailsForm;
