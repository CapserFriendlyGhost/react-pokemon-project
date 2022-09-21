import React from "react";
import { ErrorMessage, useField } from "formik";
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
      <ErrorMessage name={field.name} />
    </>
  );
};

export default FormTextField;
