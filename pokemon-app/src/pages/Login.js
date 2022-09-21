import React from "react";
import { Typography, Box, Button } from "@mui/material/";
import { Formik, Form } from "formik";
import FormTextField from "../components/FormTextField";
import styled from "styled-components";

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
};

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {(formik) => (
        <S.StyledFormWrapper>
          {console.log(formik.values)}
          <Typography component={"div"} fontSize={55} sx={{ mb: 3 }}>
            Login
          </Typography>
          <Box>
            <S.TextInputsWrapper component="form" noValidate autoComplete="off">
              <FormTextField label="Email" name="email" type="email" />
              <FormTextField label="Password" name="password" type="password" />
              <Button type="submit" sx={{ mt: 4 }}>
                Submit
              </Button>
            </S.TextInputsWrapper>
          </Box>
        </S.StyledFormWrapper>
      )}
    </Formik>
  );
};

export default Login;
