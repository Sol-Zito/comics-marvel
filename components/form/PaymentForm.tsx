import React, { ChangeEvent, FocusEvent, useState } from "react";
import CustomInput from "./InputComponent";
import { useFormContext } from "react-hook-form";
import { Box, Container, Typography } from "@mui/material";
import Cards, { Focused } from "react-credit-cards-2";

interface CardProps {
  number: string;
  expiry: string;
  cvc: string;
  nameOnCard: string;
  focus?: string;
}
const PaymentForm = () => {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext();

  const [state, setState] = useState<CardProps>({
    number: "",
    expiry: "",
    cvc: "",
    nameOnCard: "",
    focus: "",
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  return (
    <>
      {/* Datos de la Tarjeta: */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          margin: "15px 0px",
        }}
      >
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.nameOnCard}
          focused={state.focus as Focused}
        />
      </Box>
      <Container>
        <CustomInput
          name="number"
          label="Card number"
          type="text"
          control={control}
          defaultValue={state.number}
          placeholder="541242894230242"
          error={!!errors.number}
          messageError={errors.number?.message as string}
          required
          onChange={async (e) => {
            trigger("number");
            handleInputChange(e);
          }}
          onFocus={handleInputFocus}
          autocomplete=""
        />
        <CustomInput
          name="nameOnCard"
          label="Name On Card"
          type="text"
          control={control}
          defaultValue={state.nameOnCard}
          placeholder="Jose Lopez"
          error={!!errors.nameOnCard}
          messageError={errors.nameOnCard?.message as string}
          required
          onChange={async (e) => {
            trigger("nameOnCard");
            handleInputChange(e);
          }}
          onFocus={handleInputFocus}
          autocomplete=""
        />
        <CustomInput
          name="expiry"
          label="Date of Expiry"
          type="text"
          control={control}
          defaultValue={state.expiry}
          placeholder="08/25"
          error={!!errors.expiry}
          messageError={errors.expiry?.message as string}
          required
          onChange={async (e) => {
            trigger("expiry");
            handleInputChange(e);
          }}
          onFocus={handleInputFocus}
          autocomplete=""
        />
        <CustomInput
          name="cvc"
          label="Security code"
          type="password"
          control={control}
          defaultValue={state.cvc}
          placeholder="123456"
          error={!!errors.cvc}
          messageError={errors.cvc?.message as string}
          required
          onChange={async (e) => {
            trigger("cvc");
            handleInputChange(e);
          }}
          onFocus={handleInputFocus}
          autocomplete="current-password"
        />
        <Typography variant="caption" color="error">
          {/* <ErrorMessage name="email" errors={errors} /> */}
        </Typography>
      </Container>
    </>
  );
};
export default PaymentForm;
