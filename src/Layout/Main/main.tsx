import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
// import HashLoader from "react-spinners/HashLoader";
// import { CSSProperties, useEffect, useState } from "react";
import HashSpinner from "../../components/hash-spinner/hash-spinner";

const Main = () => {
  return (
    <HashSpinner>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </HashSpinner>
  );
};

export default Main;
