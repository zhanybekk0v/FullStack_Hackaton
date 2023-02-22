import React, { createContext, useContext, useReducer, useState } from 'react'
import { CART } from '../helpers/consts'
import { calcSubPrice, calcTotalPrice, getCountProductsInCart } from '../helpers/function'

export const productContext = createContext()
export const useCart = () => useContext(productContext)

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem('cart')),
  cartLength: getCountProductsInCart()
}

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload }
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload }
    default:
      return state
  }
}
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))

    if (!cart) {
      localStorage.setItem('cart', JSON.stringify({
        products: [],
        totalPrice: 0
      }))
      cart = { products: [], totalPrice: 0 }
    }
    dispatch({
      type: CART.GET_CART,
      payload: cart
    })
  }
  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart'))

    if (!cart) {
      cart = { products: [], totalPrice: 0 }
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price
    }
    let productToFind = cart.products.filter((elem) => elem.item.id == product.id)
    if (productToFind.length === 0) {
      cart.products.push(newProduct)
    } else {
      cart.products = cart.products.filter((elem) => elem.item.id !== product.id)
    }
    cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem('cart', JSON.stringify(cart))

    dispatch({
      type: CART.GET_CART,
      payload: cart
    })
  }

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id === id)
      return newCart.length > 0 ? true : false
    }
  }

  function deleteProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.products = cart.products.filter((elem) => elem.item.id != id)

    cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch({
      type: CART.GET_CART,
      payload: cart
    })
  }

  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem('cart'))

    cart.products = cart.products.map((product) => {
      if (product.item.id == id) {
        product.count = count;
        product.subPrice = calcSubPrice(product)
      }
      return product
    })
    cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch({
      type: CART.GET_CART,
      payload: cart
    })
  }

  const values = {
    getCart,
    cart: state.cart,
    addProductToCart,
    checkProductInCart,
    deleteProductInCart,
    changeProductCount,

  }
  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  )
}

export default CartContextProvider