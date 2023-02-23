import axios from 'axios'
import React, { createContext, useContext, useReducer } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { API } from '../helpers/consts'
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  categories: [],
  oneProduct: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.get(`${API}/products/${window.location.search}`, config)
      console.log(window.location);
      dispatch({ type: "GET_PRODUCTS", payload: res.data })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  };

  const getCategories = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/categories/`, config);

      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  };

  async function addProduct(newProduct) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/products/`, newProduct, config);
      console.log(res);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  }

  async function getOneProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/products/${id}`, config);
      dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  }
  const location = useLocation()
  const navigate = useNavigate()
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === 'all') {
      search.delete(query);
    } else {
      search.set(query, value);
    }

 
    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
  };
 async function deleteProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  }

  const editProduct = async (id, editedProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.patch(
        `${API}/products/${id}/`,
        editedProduct,
        config
      );
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  }
    
  const values = {
    getProducts,
    products: state.products,
    post: state.post,
    getCategories,
    categories: state.categories,
    addProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    deleteProduct,
    editProduct,
    fetchByParams
  }
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
