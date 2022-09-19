import React from "react";
import { Typography } from "@mui/material/";
import { Formik, Form } from "formik";

const Signup = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    ></Formik>
  );
};

export default Signup;
