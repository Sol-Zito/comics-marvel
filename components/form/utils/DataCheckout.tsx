import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";

export type DataCheckout = {
  name: string;
  lastName: string;
  email: string;

  address1: string;
  address2: string | null;
  city: string;
  state: string;
  zipCode: string;

  number: string;
  cvc: string;
  expiry: string;
  nameOnCard: string;

  comicName: string;
  comicImage: string;
  comicPrice: number;
};

export const changeData = (data: DataCheckout): CheckoutInput => {
  return {
    customer: {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      address: {
        address1: data.address1,
        address2: null,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
      },
    },
    card: {
      number: data.number,
      cvc: data.cvc,
      expDate: data.expiry,
      nameOnCard: data.nameOnCard,
    },
    order: {
      name: data.comicName,
      image: data.comicImage,
      price: data.comicPrice,
    },
  };
};
