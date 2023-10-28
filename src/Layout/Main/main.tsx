import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import HashSpinner from "../../components/spinner/hash-spinner";

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
