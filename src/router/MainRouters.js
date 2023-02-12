import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";

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
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRouters;
