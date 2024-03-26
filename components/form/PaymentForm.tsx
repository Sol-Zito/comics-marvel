import React, { ChangeEvent, FocusEvent, useState } from "react";
import CustomInput from "./InputComponent";
import { useFormContext } from "react-hook-form";
import { Box, Container, Typography } from "@mui/material";
import Cards, { Focused } from "react-credit-cards-2";

interface CardProps {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus?: string;
}
const PaymentForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [state, setState] = useState<CardProps>({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    if (name == "name") {
      setState((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  return (
    <>
      {/* Datos de la Tarjeta: */}
      <Box>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus as Focused}
        />
      </Box>
      <Container>
        <CustomInput
          name="number"
          label="Card number"
          type="number"
          control={control}
          defaultValue={state.number}
          placeholder="eg: 541242894230242"
          error={!!errors.number}
          messageError={errors.number?.message as string}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <CustomInput
          name="name"
          label="Holder name"
          type="text"
          control={control}
          defaultValue={state.name}
          placeholder="eg: Jose Lopez"
          error={!!errors.name}
          messageError={errors.name?.message as string}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <CustomInput
          name="expiry"
          label="Date of Expiry"
          type="text"
          control={control}
          defaultValue={state.expiry}
          placeholder="eg: 08/25"
          error={!!errors.expiry}
          messageError={errors.expiry?.message as string}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <CustomInput
          name="cvc"
          label="Security code"
          type="text"
          control={control}
          defaultValue={state.cvc}
          placeholder="eg: 123456"
          error={!!errors.cvc}
          messageError={errors.cvc?.message as string}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <Typography variant="caption" color="error">
          {/* <ErrorMessage name="email" errors={errors} /> */}
        </Typography>
      </Container>
    </>
  );
};
export default PaymentForm;
