import * as Yup from "yup";
import { RegistryType } from "store/models";
import withFormSubmission from "components/common/withFormSubmission";

export interface IValues {
  name: string;
  link: string;
  // type: string;
  description: string;
  price: number;
  weight: number;
  length: number;
  width: number;
  height: number;
  sender_contacts: string;
  payer: string;
  paymentForm: string;
  sendLocation: string;
  receiver: string;
  deliveredAt: any;
}

export interface IProps {
  registry?: RegistryType;
  onSubmit: (values: IValues) => void;
}

const withRegistryForm = withFormSubmission<IProps, IValues>({
  enableReinitialize: true,
  validationSchema: Yup.object({
    name: Yup.string(),
    link: Yup.string(),
    description: Yup.string(),
    price: Yup.number(),
    weight: Yup.number(),
    length: Yup.number(),
    width: Yup.number(),
    height: Yup.number(),
    sender_contacts: Yup.string(),
    payer: Yup.string(),
    paymentForm: Yup.string(),
    sendLocation: Yup.string(),
    receiver: Yup.string(),
    deliveredAt: Yup.string(),
    send_date_radio: Yup.string(),
  }),
  mapPropsToValues: ({ registry }) => ({
    name: registry?.name || "",
    link: registry?.link || "",
    description: registry?.description || "",
    price: registry?.price || 0,
    weight: registry?.weight || 0,
    length: registry?.length || 0,
    width: registry?.width || 0,
    height: registry?.height || 0,
    sender_contacts: "",
    payer: registry?.payer || "",
    paymentForm: registry?.paymentForm || "",
    sendLocation: "",
    receiver: "",
    deliveredAt: registry?.deliveredAt || null,
    send_date_radio: "",
  }),
  handleSubmit: (values, { props: { onSubmit } }) => {
    onSubmit(values);
  },
});

export default withRegistryForm;
