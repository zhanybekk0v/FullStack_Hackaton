import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import MainRouters from "./routers/MainRouters";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRouters />
      <Footer/>
    </div>
  );
};

export default App;
