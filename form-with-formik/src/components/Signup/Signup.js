import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import Input from "../Input/Input";

import "../Input/Input.css";

// ---- Email schema with Yup library ----
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name should have at least 2 characters")
    .required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.string()
    .min(6, "Password should have at least 6 characters")
    .required("This field is required"),
});

const Signup = () => {
  const signup = (values) => {
    console.log(values);
  };

  return (
    // ---- Form with Formik library ----
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={signup}
    >
      {({ values, handleChange, errors, handleSubmit }) => (
        <Form>
          <h1 className="form__title">Signup</h1>

          <Input
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            name="name"
            type="text"
            placeholder="Name"
          />

          <Input
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            name="email"
            type="email"
            placeholder="Email"
          />

          <Input
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            name="password"
            type="password"
            placeholder="Password"
          />

          <button onClick={handleSubmit} className="submit" type="submit">
            Signup
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
