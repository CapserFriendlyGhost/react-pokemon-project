import React from "react";
import { ErrorMessage, useField } from "formik";
import { TextField, Typography } from "@mui/material/";

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
      <Typography fontSize={12} sx={{ color: "red" }}>
        <ErrorMessage name={field.name} />
      </Typography>
    </>
  );
};

export default FormTextField;
