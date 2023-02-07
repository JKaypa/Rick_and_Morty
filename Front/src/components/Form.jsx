import React, { useState } from "react";
import style from "./Form.module.css";

const regEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regPass =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let username = "jose_kaypa@hotmail.com";
let password = "1234567890";

function Form(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const hInputChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setUser({
      ...user,
      [key]: value,
    });
    if (value === "") setErrors({ ...errors, [key]: "" });
    if (value === "") setErrors({ ...errors, [key]: "" });
  };

  const validate = (user) => {
    let errors = {};
    if (user.email === "") {
      errors.email = "Enter an email";
    }
    if (user.password === "") {
      errors.password = "Enter a password";
    } else {
      user.email !== username
        ? (errors.email = "Email does not exist")
        : (errors.email = "");
      user.password !== password
        ? (errors.password = "Password is wrong")
        : (errors.password = "");
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(user));
    if (errors.email === "" && errors.password === "") props.login(user);
  };

  return (
    <div>
      <img
        className={style.rym}
        src="Rick_and_Morty.svg.png"
        alt="Rick and Morty"
      />
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.input}
          onChange={hInputChange}
          placeholder="Username"
          name="email"
          type="email"
          value={user.email}
          autoComplete= 'off'
        />
        <span className={style.error}>
          {errors.email === "" ? "" : errors.email}
        </span>
        <input
          className={style.input}
          onChange={hInputChange}
          placeholder="Password"
          name="password"
          type="password"
          value={user.password}
        />
        <span className={style.error}>
          {errors.password === "" ? "" : errors.password}
        </span>
        <button className={style.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Form;
