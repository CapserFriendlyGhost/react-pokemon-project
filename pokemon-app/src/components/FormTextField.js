import React from "react";
import { ErrorMessage, useField } from "formik";
import { TextField, Typography } from "@mui/material/";
import styled from "styled-components";

const S = {
  StyledTextField: styled(TextField)`
    background-color: #ffffef;
    -webkit-box-shadow: 0 1px 10px -5px black;
    -moz-box-shadow: 0 1px 10px -5px black;
    box-shadow: 0 1px 10px -5px black;
  `,
};

const FormTextField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <S.StyledTextField
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
