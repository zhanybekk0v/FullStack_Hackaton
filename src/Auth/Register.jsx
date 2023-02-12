import React, { useEffect, useState } from "react";
import './Login.css'
import bgInage from '../assets/img/bgImg.jpg'
import userImg from '../assets/img/user.png'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/AuthContextProvider";

const Register = () => {
  const { handleRegister } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordConfirmDirty, setPasswordConfirmDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым!')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!')
  const [PasswordConfirmError, setPasswordConfirmError] = useState('Пароль неможет быть пустым!')



  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPasswordError('Пaроль должен быть больше 3 и меньше 10!')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым!')
      }
    } else {
      setPasswordError('')
    }
  }
  const passwordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 10) {
      setPasswordConfirmError('Пароль должен быть больше 3 и меньше 10!')
      if (!e.target.value) {
        setPasswordConfirmError('Пароль не может быть пустым!')
      }
    } else {
      setPasswordConfirmError('')
    }
  }

  function blurHandler(e) {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      case 'password_confirm':
        setPasswordConfirmDirty(true)
        break
    }
  }



  function handleSave(e) {
    e.preventDefault()
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Заполните поля пожалуйста!',
      })

    } else {
      let formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)
      formData.append('password2', passwordConfirm)
      handleRegister(formData)
      console.log(formData)
    }
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Вы ушпешно зарегистрировались!',
    })
    setPassword('')
    setEmail('')
    setPasswordConfirm('')
  }

  return <>
    <div className="loginpage">
      <div className="form-container">
        <img src={bgInage} className="bg__img" alt="" />
        <form action="submit" onSubmit={handleSave} className="form-box-register">
          <img src={userImg} className="user" alt="" />
          <h1>Register</h1>
          {(emailDirty && emailError) && <p className="Error" style={{ color: 'red' }}>{emailError}</p>}
          <input onChange={(e) => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="text" name="email" placeholder="Username" />

          {(passwordDirty && passwordError) && <p className="Error" style={{ color: 'red' }}>{passwordError}</p>}
          <input onChange={(e) => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name="password" placeholder="Password" />

          {(passwordConfirmDirty && PasswordConfirmError) && <p className="Error" style={{ color: 'red' }}>{PasswordConfirmError}</p>}
          <input onChange={(e) => passwordConfirmHandler(e)} onBlur={e => blurHandler(e)} type="password" name="password_confirm" placeholder="Password Confirm" />

          <button className="btn-login">Register</button>
          <a href="#" className="forgot__link">Forgot password</a>
          <Link to='/login'>
            <a href="#" className="forgot__link">You're have accaunt so 'Login, please'</a>
          </Link>
        </form>
      </div>
    </div>
  </>
};

export default Register;
