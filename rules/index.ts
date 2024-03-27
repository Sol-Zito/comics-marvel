import * as yup from "yup";
export const schema = yup.object().shape({
  customer: yup.object().shape({
    name: yup
      .string()
      .required("This field is required")
      .min(2, "Minimum 2 characters")
      .max(10, "Maximum 10 characters"),
    lastname: yup
      .string()
      .required("This field is required")
      .min(2, "Minimum 2 characters")
      .max(10, "Maximum 10 characters"),
    email: yup
      .string()
      .email()
      .required("This field is required")
      .email("The email is not valid")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Must be a valid email"),
  }),
  address: yup.object().shape({
    address1: yup
      .string()
      .required("This field is required")
      .min(2, "Minimum 2 characters"),
    address2: yup.string().notRequired(),
    city: yup
      .string()
      .required("This field is required")
      .min(2, "Minimum 2 characters"),
    state: yup
      .string()
      .required("This field is required")
      .min(2, "Minimum 2 characters"),
    zipCode: yup
      .string()
      .required("This field is required")
      .min(2, "Minimum 2 characters"),
  }),
  card: yup.object().shape({
    number: yup
      .string()
      .required("This field is required")
      .matches(/^[0-9]{16}$/, "Must be a 16 digit number"),
    cvc: yup
      .string()
      .required("This field is required")
      .matches(/^[0-9]{3}$/, "Must be a 3 digit number"),
    expDate: yup
      .string()
      .required("This field is required")
      .matches(/^[0-9]{4}$/, "Must be a 4 digit number"),
    nameOnCard: yup
      .string()
      .required("This field is required")
      .min(2, "Minimum 2 characters")
      .max(20, "Maximum 20 characters"),
  }),
  order: yup.object().shape({
    name: yup.string().required(),
    image: yup.string().required(),
    price: yup.number().required(),
  }),
});
