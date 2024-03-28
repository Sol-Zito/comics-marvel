import React from "react";
import CustomInput from "./InputComponent";
import { useFormContext } from "react-hook-form";
import { Container, Typography } from "@mui/material";

const PersonalForm = () => {
  const {
    control,
    trigger,
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
          placeholder="Jose"
          messageError={errors.name?.message as string}
          onChange={async () => {
            trigger("name");
          }}
        />
        <CustomInput
          name="lastName"
          label="lastName"
          type="text"
          control={control}
          defaultValue=""
          required
          placeholder="Gonzales"
          error={!!errors.lastName}
          messageError={errors.lastName?.message as string}
          onChange={async () => {
            trigger("lastName");
          }}
        />
        <CustomInput
          name="email"
          label="Email"
          type="text"
          control={control}
          defaultValue=""
          required
          placeholder="JoseGonzales@gmail.com"
          error={!!errors.email}
          messageError={errors.email?.message as string}
          onChange={async () => {
            trigger("email");
          }}
        />
        <Typography variant="caption" color="error">
          {/* <ErrorMessage name="email" errors={errors} /> */}
        </Typography>
      </Container>
    </>
  );
};
export default PersonalForm;
