import React, { useState } from "react";
import style from "./Form.module.css";

const regEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

function Form({ login }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const hInputChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setUser({
      ...user,
      [key]: value,
    });
    if (key === "password")
      regPass.test(value)
        ? (errors.password = "")
        : (errors.password =
            "7 to 15 characters, at least one number and a special character");
    if (value === "") setErrors({});
  };

  const validate = (user) => {
    let errors = {};
    regEmail.test(user.email)
      ? (errors.email = "")
      : (errors.email = "Enter a valid email");
    regPass.test(user.password)
      ? (errors.password = "")
      : (errors.password =
          "7 to 15 characters, at least one number and a special character");

    console.log(regEmail.test(user.email));
    console.log(regPass.test(user.password));
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(user));
    !errors.email && !errors.password && login(user);
  };
  return (
    <div className={style.container}>
      <img
        className={style.rymImg}
        src="Rick_and_Morty.svg.png"
        alt="Rick and Morty"
      />
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.input}
          onChange={hInputChange}
          placeholder="Username"
          name="email"
          type="text"
          value={user.email}
          autoComplete="off"
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
