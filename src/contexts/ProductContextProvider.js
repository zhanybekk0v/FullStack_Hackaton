import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'
import Swal from 'sweetalert2'
import { API } from '../helpers/consts'

export const productContext = createContext()
export const useProduct = () => useContext(productContext)

const INIT_STATE = {
  products: [],
  post: 0,
  categories: [],
  oneProduct: {},
}

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload.results }
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload }
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getProducts = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.get(`${API}/products/${window.location.search} `, config)
      dispatch({type: "GET_PRODUCTS", payload: res.data})
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    }
  }

  const getCategories = async () => {
    
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/categories/`, config);

      dispatch({
        type: 'GET_CATEGORIES', payload: res.data
      })

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    }
  };

  async function addProduct(newProduct) {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/products/`, newProduct, config)
      console.log(res);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      })
    }
  }



  const values = { 
    getProducts, 
    products: state.products, 
    getCategories, 
    categories: state.categories,
    addProduct
   }
  return (
    <productContext.Provider value={values}>
      {
        children
      }
    </productContext.Provider>
  )
}

export default ProductContextProvider