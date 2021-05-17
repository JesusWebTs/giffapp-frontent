import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerService } from "../../services/register";
import "./Register.css";

const initialValues = { userName: "", password: "" };
const validateFields = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required Username";
  }
  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 3) {
    errors.password = "Lenght must be greather than 3";
  }
  return errors;
};

function Register() {
  const [isRegister, setIsRegister] = useState(false);

  if (isRegister)
    return <h2>✅Contratulations! You've ben successfully registered</h2>;

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={(values, { setFieldError }) => {
          return registerService(values)
            .then(() => {
              setIsRegister(true);
            })
            .catch(() => {
              setFieldError("userName", "This username is not valid");
            });
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="form">
            <label>
              Username
              <Field
                autoFocus
                autoComplete="off"
                className={errors.userName ? "error" : ""}
                name="userName"
                placeholder="Put here the username"
              />
              <ErrorMessage
                className="form-error"
                name="userName"
                component="span"
              />
            </label>
            <label>
              Password
              <Field
                autoComplete="off"
                className={errors.password ? "error" : ""}
                name="password"
                placeholder="Put here the password"
                type="password"
              />
              <ErrorMessage
                className="form-error"
                name="password"
                component="span"
              />
            </label>
            <button className="btn" disabled={isSubmitting}>
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default Register;
