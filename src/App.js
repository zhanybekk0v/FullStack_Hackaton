import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import HomePage from "./pages/HomePage";
import MainRouters from "./router/MainRouters";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRouters />
      {/* <Footer/> */}
    </div>
  );
};

export default App;
