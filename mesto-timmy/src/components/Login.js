import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth.js";

const Login = ({ handleLogin }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  const { password, email } = formValue;

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    auth.authorize(password, email).then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        handleLogin();
        navigate("/");
      }
    });
  };

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="login__input"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          className="login__input"
          placeholder="Пароль"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
