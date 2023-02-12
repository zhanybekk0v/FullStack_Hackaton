import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { API } from '../helpers/consts'

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleRegister(formData) {
    setLoading(true)
    try {
      const res = await axios.post(`${API}/accounts/register/`, formData)
      console.log(res)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    } finally {
      setLoading(false)
    }
  }

  async function handleLogin(formData, email) {
    setLoading(true)
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData)
      console.log(res)
      localStorage.setItem('tokens', JSON.stringify(res.data))
      localStorage.setItem('email', email)
      setUser(email)
      navigate('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    } finally {
      setLoading(false);
    }
  }

  async function checkAuth() {
    setLoading(true)
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'))
      const Authorization = `Bearer ${tokens.access}`

      const config = {
        headers: {
          Authorization,
        }
      }
      const res = await axios.post(`${API}/accounts/refresh/`, {
        refresh: tokens.refresh,
        config,
      });
      localStorage.setItem('tokens', JSON.stringify({
        access: res.data.access,
        refresh: tokens.refresh,
      })
      );
      const email = localStorage.getItem('email');
      setUser(email);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
    } finally {
      setLoading(false)
    };
  };

 function handleLogOut() {
    localStorage.removeItem('tokens')
    localStorage.removeItem('email')
    setUser(false)

    Swal.fire({
      icon: 'warning',
      title: 'Sorry!!!',
      text: 'Вы вышли из аккаунта!',
      footer:  '<a href="http://localhost:3000/login">Попробуйте войти в аккаунт снова!</a>'
    })
  }


  const values = {
    handleRegister,
    handleLogin,
    user,
    checkAuth,
    handleLogOut,
    loading
  }
  return (
    <authContext.Provider value={values}>
      {children}
    </authContext.Provider>
  )
}

export default AuthContextProvider