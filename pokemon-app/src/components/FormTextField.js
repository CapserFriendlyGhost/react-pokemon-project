import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material/";

const FormTextField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        label={label}
        name={field.name}
        variant="outlined"
        type={type}
        autoComplete="off"
        {...field}
        {...props}
      />
    </>
  );
};

export default FormTextField;
