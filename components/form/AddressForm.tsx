import React from "react";
import CustomInput from "./InputComponent";
import { useFormContext } from "react-hook-form";
import { Container } from "@mui/material";

const AddressForm = () => {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {/* Datos de envio: */}
      <Container>
        <CustomInput
          name="address1"
          label="Address"
          type="text"
          control={control}
          defaultValue=""
          placeholder="Av. Carrasco 5480"
          error={!!errors.address1}
          messageError={errors.address1?.message as string}
          required
          onChange={async () => {
            trigger("address1");
          }}
        />
        <CustomInput
          name="address2"
          label="Departamento"
          type="text"
          control={control}
          defaultValue=""
          placeholder="Alvear"
          error={!!errors.address2}
          messageError={errors.address2?.message as string}
          required={false}
          onChange={async () => {
            trigger("address2");
          }}
        />
        <CustomInput
          name="state"
          label="State"
          type="text"
          control={control}
          defaultValue=""
          placeholder="Santa Fe"
          error={!!errors.state}
          messageError={errors.state?.message as string}
          required
          onChange={async () => {
            trigger("state");
          }}
        />
        <CustomInput
          name="city"
          label="City"
          type="text"
          control={control}
          defaultValue=""
          placeholder="Alvear"
          error={!!errors.city}
          messageError={errors.city?.message as string}
          required
          onChange={async () => {
            trigger("city");
          }}
        />
        <CustomInput
          name="zipCode"
          label="Zip Code"
          type="text"
          control={control}
          defaultValue=""
          placeholder="2008"
          error={!!errors.zipCode}
          messageError={errors.zipCode?.message as string}
          required
          onChange={async () => {
            trigger("zipCode");
          }}
        />
      </Container>
    </>
  );
};
export default AddressForm;
