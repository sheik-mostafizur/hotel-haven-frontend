import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
// import Container from "../../components/ui/container";
import Banner from "./banner";
import BestHotel from "./best-hotel";
import HotelGallery from "./hotel-gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BestHotel />
      <HotelGallery />
      <Footer />
    </>
  );
};

export default Home;
