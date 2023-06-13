import { TextField, TextFieldProps } from "@mui/material";
import { Controller, Control, FieldValues, FieldError } from "react-hook-form";

import cls from "./input.module.scss";

interface InputProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name"> {
  control: Control<T>;
  name: keyof T;
  label: string;
  errors: any;
}

const Input = <T extends FieldValues>({
  control,
  name,
  label,
  errors,
  ...rest
}: InputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name as any}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          className={cls.input}
          {...rest}
          label={label}
          variant="outlined"
          fullWidth
          margin="normal"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          error={!!errors?.[name]}
          helperText={errors?.[name]?.message}
        />
      )}
    />
  );
};

export default Input;
