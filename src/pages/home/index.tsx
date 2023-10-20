import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
// import Container from "../../components/ui/container";
import Banner from "./banner";
import BestHotel from "./best-hotel";
import CustomerReviews from "./customer-reviews";
import HotelGallery from "./hotel-gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BestHotel />
      <HotelGallery />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
