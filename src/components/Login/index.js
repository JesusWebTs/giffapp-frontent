import React, { useState, useEffect } from "react";
import "./Login.css";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import Spinner from "../Spinner";
function Login(props) {
  const { onLogin } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { isLogged, login, isLoginLoading, hasLoginError } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    /* alert(`${userName}, ${password}`); */
    login({ userName, password });
  };

  useEffect(() => {
    if (isLogged) {
      setLocation("/");
      onLogin && onLogin();
    }
    return () => {};
  }, [isLogged, setLocation, onLogin]);

  return (
    <React.Fragment>
      {isLoginLoading && <Spinner></Spinner>}
      {!isLoginLoading && (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Username
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            ></input>
          </label>
          <label>
            Password
            <input
              type={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </label>
          <button className="btn">Submit</button>
        </form>
      )}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </React.Fragment>
  );
}

export default Login;
