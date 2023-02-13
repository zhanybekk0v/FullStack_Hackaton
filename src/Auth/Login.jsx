import React, { useState } from "react";
import "./Login.css";
import bgInage from "../assets/img/bgImg.jpg";
import userImg from "../assets/img/user.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthContextProvider";

const Login = () => {
  const { handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым!");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым!"
  );

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPasswordError("Пароль должен быть болбше 3 и меньше 10");
      if (!e.target.value) {
        setPasswordError("Пароль неможет быть пустым!");
      }
    } else {
      setPasswordError("");
    }
  };

  function blurHandler(e) {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  }

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Заполните поля пожалуйста!",
      });
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
      console.log(formData);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Добро пожаловать!",
      });
      // navigate('/')
    }

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="loginpage">
        <div className="form-container">
          <img src={bgInage} className="bg__img" alt="" />
          <form action="submit" onSubmit={handleSave} className="form-box">
            <img src={userImg} className="user" alt="" />
            <h1>Login</h1>
            {emailDirty && emailError && (
              <p className="Error" style={{ color: "red" }}>
                {emailError}
              </p>
            )}
            <input
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
              type="text"
              name="email"
              placeholder="Username"
            />
            {passwordDirty && passwordError && (
              <p className="Error" style={{ color: "red" }}>
                {passwordError}
              </p>
            )}
            <input
              onChange={(e) => passwordHandler(e)}
              value={password}
              onBlur={(e) => blurHandler(e)}
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="btn-login">Login</button>
            <a href="#" className="forgot__link">
              Forgot password
            </a>
            <Link to="/register">
              <a href="#" className="forgot__link">
                Register
              </a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
