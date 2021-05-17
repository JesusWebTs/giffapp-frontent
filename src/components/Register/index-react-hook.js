import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { registerService } from "../../services/register";
import "./Register.css";

const InitialValues = { userName: "", password: "" };
const validateFields = (values) => {
  const errors = {};
  console.log(errors);
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
  const { handleSubmit, register, errors } = useForm();
  const [isRegister, setIsRegister] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (values) => {
    setIsSubmitting(true);
    console.log(values);
    registerService(values).then(() => {
      setIsRegister(true);
      setIsSubmitting(false);
    });
  };

  if (isRegister)
    return <h2>✅Contratulations! You've ben successfully registered</h2>;

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Username
          <input
            autoFocus
            autoComplete="off"
            className={errors.userName ? "error" : ""}
            name="userName"
            placeholder="Put here the username"
            ref={register({ required: "This is required" })}
          />
          <ErrorMessage
            errors={errors}
            name="userName"
            as={<span className="form-error" />}
          ></ErrorMessage>
        </label>
        <label>
          Password
          <input
            autoComplete="off"
            className={errors.password ? "error" : ""}
            name="password"
            placeholder="Put here the password"
            type="password"
            ref={register({ required: "This is required" })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            as={<span className="form-error" />}
          ></ErrorMessage>
        </label>
        <button className="btn" disabled={isSubmitting}>
          Registrarse
        </button>
      </form>
    </React.Fragment>
  );
}

export default Register;
