import * as Yup from "yup";
import { RegistryType } from "store/models";
import withFormSubmission from "components/common/withFormSubmission";

export interface IValues {
  name: string;
  link: string;
  type: string;
  description: string;
  price: number;
  weight: number;
  lenght: number;
  width: number;
  height: number;
  sender_contacts: string;
  payer: string;
  paymentType: string;
  send_location: string;
  receiver: string;
  send_date: string;
}

export interface IProps {
  registry?: RegistryType;
  onSubmit: (values: IValues) => void;
}

const withDetailsForm = withFormSubmission<IProps, IValues>({
  enableReinitialize: true,
  validationSchema: Yup.object({
    name: Yup.string(),
    link: Yup.string(),
    type: Yup.string(),
    description: Yup.string(),
    price: Yup.number(),
    weight: Yup.number(),
    lenght: Yup.number(),
    width: Yup.number(),
    height: Yup.number(),
    sender_contacts: Yup.string(),
    payer: Yup.string(),
    paymentType: Yup.string(),
    send_location: Yup.string(),
    receiver: Yup.string(),
    send_date: Yup.string(),
  }),
  mapPropsToValues: ({ registry }) => ({
    name: registry?.name || "",
    link: registry?.link || "",
    type: "cargo",
    description: registry?.description || "",
    price: registry?.price || 0,
    weight: registry?.weight || 0,
    lenght: registry?.lenght || 0,
    width: registry?.width || 0,
    height: registry?.height || 0,
    sender_contacts: "",
    payer: registry?.payer || "",
    paymentType: "",
    send_location: "",
    receiver: "",
    send_date: "",
  }),
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
});

export default withDetailsForm;
