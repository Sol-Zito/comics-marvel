import { TextField } from "@mui/material";
import { ChangeEvent, FocusEvent } from "react";
import { Control, Controller } from "react-hook-form";

interface CustomInputProps {
  name: string;
  control: Control<any>;
  defaultValue: string;
  placeholder?: string;
  type: string;
  label: string;
  required: boolean;
  textFieldProps?: Record<string, any>;
  error?: boolean;
  messageError?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  autocomplete?: string;
}

const CustomInput = ({
  name,
  control,
  defaultValue,
  placeholder,
  type,
  label,
  required,
  textFieldProps,
  error,
  messageError,
  onChange,
  onFocus,
}: CustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          error={error}
          helperText={messageError}
          fullWidth
          required={required}
          sx={{ mb: 2 }}
          {...textFieldProps}
          onChange={(e) => {
            field.onChange(e);
            onChange?.(e as ChangeEvent<HTMLInputElement>);
          }}
          onFocus={(e) => {
            onFocus?.(e as FocusEvent<HTMLInputElement>);
          }}
        />
      )}
    />
  );
};
export default CustomInput;
