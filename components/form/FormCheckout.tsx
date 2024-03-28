import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Comics } from "dh-marvel/features/marvel/comics.type";
import PersonalForm from "./PersonalForm";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const steps = [
  "Personal information",
  "Delivery address",
  "Details of payment",
];

interface Props {
  id?: number;
  comic: Comics;
  onSubmit: (data: any) => void;
}

const initialData = {
  name: "",
  lastName: "",
  email: "",

  address1: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",

  number: "",
  nameOnCard: "",
  expiry: "",
  cvc: "",
};

export const FormCheckout: FC<Props> = ({ onSubmit, comic }) => {
  const { handleSubmit, trigger, getFieldState, clearErrors, getValues } =
    useFormContext();
  const [step, setStep] = useState<number>(1);

  const [data, setData] = useState(initialData);
  console.log("data", data);

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleNextStep = async () => {
    trigger().then(() => {
      if (step === 1) {
        const name = getFieldState("name");
        const lastName = getFieldState("lastName");
        const email = getFieldState("email");

        const inputs = [name, lastName, email];

        const hasErrors = inputs.some((input) => input.invalid);

        if (hasErrors) {
          return;
        }

        const updatedData = {
          ...data,

          name: getValues("name"),
          lastName: getValues("lastName"),
          email: getValues("email"),
        };
        setData(updatedData);
      }
      if (step === 2) {
        const address1 = getFieldState("address1");
        const address2 = getFieldState("address2");
        const state = getFieldState("state");
        const city = getFieldState("city");
        const zipCode = getFieldState("zipCode");

        const inputs = [address1, address2, state, city, zipCode];

        const hasErrors = inputs.some((input) => input.invalid);

        if (hasErrors) {
          return;
        }

        const updatedData = {
          ...data,

          address1: getValues("address1"),
          address2: getValues("address2"),
          state: getValues("state"),
          city: getValues("city"),
          zipCode: getValues("zipCode"),
        };
        setData(updatedData);
      }
      if (step === 3) {
        const cardNumber = getFieldState("number");
        const nameOnCard = getFieldState("nameOnCard");
        const expDate = getFieldState("expiry");
        const securityCode = getFieldState("cvc");

        const inputs = [cardNumber, nameOnCard, expDate, securityCode];

        const hasErrors = inputs.some((input) => input.invalid);

        if (hasErrors) {
          return;
        }

        const updatedData = {
          ...data,

          number: getValues("number"),
          nameOnCard: getValues("nameOnCard"),
          expiry: getValues("expiry"),
          cvc: getValues("cvc"),
        };
        setData(updatedData);
      }
      setStep(step + 1);
      clearErrors();
    });
  };

  return (
    <>
      <Box>
        <Stepper activeStep={step - 1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ maxWidth: "500px", margin: "0 auto" }}>
        <Paper
          elevation={1}
          sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {step == 1 && <PersonalForm />}
            {step == 2 && <AddressForm />}
            {step == 3 && <PaymentForm />}
            {step == 4 && (
              <Typography variant="h6" textAlign="center">
                Finalizar compra
              </Typography>
            )}

            <Box>
              {step > 1 && (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ margin: 2 }}
                  onClick={handlePrevStep}
                >
                  Anterior
                </Button>
              )}
              {step <= 3 && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ margin: 2 }}
                  onClick={handleNextStep}
                >
                  Siguiente
                </Button>
              )}
              {step == 4 && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ margin: 2 }}
                >
                  Enviar
                </Button>
              )}
            </Box>
          </form>
        </Paper>
      </Box>
    </>
  );
};
