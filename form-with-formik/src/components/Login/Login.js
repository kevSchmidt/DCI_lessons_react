import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "../Input/Input.css";

// ---- Login schema with Yup library ----
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: Yup.string()
    .min(6, "Password should have at least 6 characters")
    .required("This field is required"),
});

const Login = () => {
  const login = (values) => {
    console.log(values);
  };

  return (
    // ---- Form with Formik library ----
    <div>
      <h1 className="form__title">Login</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={login}
      >
        {({ errors, touched }) => (
          <Form className="input__container">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
              className={
                errors.email ? "input input-error" : "input input-no-error"
              }
            />
            <span className="error">
              {errors.email && touched.email ? errors.email : null}
            </span>

            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={
                errors.email ? "input input-error" : "input input-no-error"
              }
              autoComplete="off"
            />
            <span className="error">
              {errors.password && touched.password ? errors.password : null}
            </span>

            <button className="submit" type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
