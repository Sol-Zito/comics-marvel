import React from "react";
import CustomInput from "./InputComponent";
import { useFormContext } from "react-hook-form";
import { Container, Typography } from "@mui/material";

const PersonalForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {/* data user */}
      <Container>
        <CustomInput
          name="name"
          label="Name"
          type="text"
          control={control}
          defaultValue=""
          required
          error={!!errors.name}
          messageError={errors.name?.message as string}
        />
        <CustomInput
          name="lastName"
          label="LastName"
          type="text"
          control={control}
          defaultValue=""
          required
          error={!!errors.name}
          messageError={errors.name?.message as string}
        />
        <CustomInput
          name="email"
          label="Email"
          type="text"
          control={control}
          defaultValue=""
          required
          error={!!errors.name}
          messageError={errors.name?.message as string}
        />
        <Typography variant="caption" color="error">
          {/* <ErrorMessage name="email" errors={errors} /> */}
        </Typography>
      </Container>
    </>
  );
};
export default PersonalForm;
