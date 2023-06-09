import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ handleRegister }) => {
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
  });

  const { password, email } = formValue;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleRegister(password, email);
  }

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="register__input"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="register__input"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Пароль"
          required
        />
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__login-link">
        Уже зарегистрированы?{" "}
        <Link to="/sign-in" className="register__link" href="#">
          Войти
        </Link>
      </p>
    </div>
  );
};

export default Register;
