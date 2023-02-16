import React, { createContext, useContext } from 'react'

export const productContext = createContext()
export const useCart = () => useContext(productContext)

const CartContexttProvider = ({ children }) => {
  
  const values = {}
  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  )
}

export default CartContexttProvider