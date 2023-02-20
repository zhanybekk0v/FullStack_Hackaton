import React, { createContext, useContext, useState } from 'react'

export const productContext = createContext()
export const useCart = () => useContext(productContext)

const CartContexttProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')


  const values = {
    user,email
  }
  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  )
}

export default CartContexttProvider