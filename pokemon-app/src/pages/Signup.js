import React from "react";
import { Typography, Box, Button } from "@mui/material/";
import { Formik } from "formik";
import FormTextField from "../components/FormTextField";
import styled from "styled-components";
import * as Yup from "yup";

const S = {
  StyledFormWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
  `,
  TextInputsWrapper: styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    & > div {
      margin-top: 30px;
    }
  `,
  StyledButton: styled(Button)`
    margin-top: 30px;
  `,
};

const Signup = () => {
  const validate = Yup.object({
    name: Yup.string().required("Name is requried"),
    email: Yup.string().email("Email is invalid").required("Email is requried"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "At least one uppercase character")
      .matches(/(\d)/, "At least one number")
      .matches(/(\W)/, "At least one special character")
      .required("Password is requried"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is requried"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <S.StyledFormWrapper>
          {console.log(formik.values)}
          <Typography component={"div"} fontSize={55} sx={{ mb: 3 }}>
            Sign up
          </Typography>
          <Box>
            <S.TextInputsWrapper component="form" noValidate autoComplete="off">
              <FormTextField label="Name" name="name" type="text" />
              <FormTextField label="Email" name="email" type="email" />
              <FormTextField label="Password" name="password" type="password" />
              <FormTextField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <Button type="submit" sx={{ mt: 4 }}>
                Create an account
              </Button>
            </S.TextInputsWrapper>
          </Box>
        </S.StyledFormWrapper>
      )}
    </Formik>
  );
};

export default Signup;
