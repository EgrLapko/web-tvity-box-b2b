export type GeneralListType<T> = {
  currentPage?: number;
  data?: T;
  firstPageUrl?: string;
  from?: number;
  lastPage?: number;
  lastPageUrl?: string;
  links?: any[];
  nextPageUrl?: string;
  path?: string;
  perPage?: number;
  prevPageUrl?: string;
  to?: number;
  total?: number;
};

export type RegistryType = {
  id: number;
  name: string;
  link: string;
  price: number;
  weight: number;
  lenght: number; // ASK API TO FIX MISTAKE
  width: number;
  height: number;
  payer: number;
  paymentForm: string;
  deliveredAt: string;
  generatedAt: string;
  createdAt: string;
  updatedAt: string;
  amountOfReceivers: number;
};
