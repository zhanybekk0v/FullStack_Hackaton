import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import EditProduct from '../components/Product/EditProduct'
import LoaderLoading from "../Loader/LoaderLoading";
import AddProduct from "../components/Product/AddProduct";

const MainRouters = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/products",
      element: <ProductsPage />,
      id: 1,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 2,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 4,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 5,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 6,
    },
    {
      link: "/login",
      element: <Login />,
      id: 7
    },
    {
      link: '/register',
      element: <Register />,
      id: 8
    },
    {
      link: '/edit/:id',
      element: <EditProduct />,
      id: 9
    },
    {
      link:'/add' ,
      element: <AddProduct />,
      id: 10
    },
    {
      link: "/login",
      element: <Login />,
      id: 7
    },
    {
      link: '/register',
      element: <Register />,
      id: 8
    },
    {
      link: '/edit/:id',
      element: <EditProduct />,
      id: 9
    }
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route  path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRouters;
