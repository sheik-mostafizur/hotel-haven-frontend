import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
// import Container from "../../components/ui/container";
import Banner from "./banner";
import BestHotel from "./best-hotel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BestHotel />
      <Footer />
    </>
  );
};

export default Home;
