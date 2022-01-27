import { useState } from "react";
import axios from "axios";

import Input from "../Input";
import Button from "../Button";

const LoginForm = ({ onChangeView, onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (e) => {
    e.preventDefault();
    const error = document.querySelector("#login-error");

    axios
      .post("/api/auth/login", formData)
      .then(({ data }) => {
        setIsLoggedIn(true);
        onLogin(data);
      })
      .catch(
        (err) =>
          (error.textContent = err.response
            ? err.response.data.message
            : err.message)
      );
  };

  const onChange = (e) => {
    const target = e.target;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return !isLoggedIn ? (
    <form>
      <Input
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={onChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
      />
      <div className="mt-4 text-center flex flex-col items-center gap-2">
        <p className="text-red-500" id="login-error"></p>
        <Button label="Log in" onClick={login} />
        <span
          className="block mt-2 text-lg hover:text-blue-400 hover:cursor-pointer"
          onClick={onChangeView}
        >
          Don't have an account? Register
        </span>
      </div>
    </form>
  ) : (
    <h4 className="text-lg mt-4">Logged in, you can proceed!</h4>
  );
};

export default LoginForm;
