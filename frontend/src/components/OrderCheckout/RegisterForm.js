import { useState } from "react";
import axios from "axios";

import Input from "../Input";
import Button from "../Button";

const RegisterForm = ({ onChangeView }) => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const signup = (e) => {
    e.preventDefault();
    const error = document.querySelector("#register-error");
    const success = document.querySelector("#register-success");

    if (formData.password !== formData.passwordRepeat) {
      error.textContent = "Passwords dont match!";
      return;
    }

    axios
      .post("/api/auth/signup", formData)
      .then(({ data }) => {
        error.textContent = "";
        success.textContent = "Registered, you can login now";
      })
      .catch((err) => {
        error.textContent = err.response
          ? err.response.data.message
          : err.message;
        success.textContent = "";
      });
  };

  const onChange = (e) => {
    const target = e.target;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <form className="">
      <Input
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={onChange}
      />
      <Input
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={onChange}
      />
      <Input
        label="Surname"
        name="surname"
        type="text"
        value={formData.surname}
        onChange={onChange}
      />
      <Input
        label="Email"
        name="email"
        type="text"
        value={formData.email}
        onChange={onChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
      />
      <Input
        label="Password Repeat"
        name="passwordRepeat"
        type="password"
        value={formData.passwordRepeat}
        onChange={onChange}
      />
      <div className="mt-4 text-center flex flex-col items-center gap-2">
        <p className="text-red-500" id="register-error"></p>
        <p className="text-green-500" id="register-success"></p>
        <Button label="Register" onClick={signup} />
        <span
          className="block mt-2 text-lg hover:text-blue-400 hover:cursor-pointer"
          onClick={onChangeView}
        >
          Have an account? Login
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
