import React, { useEffect, useState } from "react";
import "./Login.css";
import bgInage from "../assets/img/bgImg.jpg";
import userImg from "../assets/img/user.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, seTEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordConfirmDirty, setPasswordConfirmDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым!");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым!"
  );
  const [PasswordConfirmError, setPasswordConfirmError] = useState(
    "Пароль неможет быть пустым!"
  );
  const [passwordCheck, setPasswordCheck] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError || PasswordConfirmError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, passwordConfirm]);

  const emailHandler = (e) => {
    seTEmail(e.target.value);
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Папроль должен быть болбше 3 и меньше 8");
      if (!e.target.value) {
        setPasswordError("Пароль неможет быть пустым!");
      }
    } else {
      setPasswordError("");
    }
  };
  const passwordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Папроль должен быть болбше 3 и меньше 8");
      if (!e.target.value) {
        setPasswordConfirmError("Пароль неможет быть пустым!");
      }
    } else {
      setPasswordConfirmError("");
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
      case "password_confirm":
        setPasswordConfirmDirty(true);
        break;
    }
  }

  return (
    <>
      <div className="loginpage">
        <div className="form-container">
          <img src={bgInage} className="bg__img" alt="" />
          <form action="index.html" method="post" className="form-box-register">
            <img src={userImg} className="user" alt="" />
            <h1>Register</h1>
            {emailDirty && emailError && (
              <p style={{ color: "red" }}>{emailError}</p>
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
              <p style={{ color: "red" }}>{passwordError}</p>
            )}
            <input
              onChange={(e) => passwordHandler(e)}
              value={password}
              onBlur={(e) => blurHandler(e)}
              type="password"
              name="password"
              placeholder="Password"
            />
            {passwordConfirmDirty && PasswordConfirmError && (
              <p style={{ color: "red" }}>{PasswordConfirmError}</p>
            )}
            <input
              onChange={(e) => passwordConfirmHandler(e)}
              onBlur={(e) => blurHandler(e)}
              type="password"
              name="password_confirm"
              placeholder="Password Confirm"
            />
            {/* {()} */}
            <button disabled={!formValid} className="btn-login">
              Register
            </button>
            <a href="#" className="forgot__link">
              Forgot password
            </a>
            <Link to="/login">
              <a href="#" className="forgot__link">
                You're have accaunt so 'Login, please'
              </a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
