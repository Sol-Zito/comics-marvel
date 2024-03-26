import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalForm from "./PersonalForm";
import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import { UseFormHandleSubmit } from "react-hook-form";

const steps = [
  "Personal information",
  "Delivery address",
  "Details of payment",
];

interface props {
  handleSubmit: UseFormHandleSubmit<{}, undefined>;
  onSubmit: (data: any) => void;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}
const StepperComponent = ({
  handleSubmit,
  onSubmit,
  activeStep,
  setActiveStep,
}: props) => {
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              {activeStep == 0 && <PersonalForm />}
              {activeStep == 1 && <AddressForm />}
              {activeStep == 2 && <PaymentForm />}
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ margin: 2 }}
                >
                  Enviar
                </Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </Box>
          </form>
        </React.Fragment>
      )}
    </Box>
  );
};
export default StepperComponent;
