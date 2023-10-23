import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Container from "../../components/ui/container";
// import Container from "../../components/ui/container";
import Banner from "./banner";
import BestHotel from "./best-hotel";
// import BookingForm from "./booking-form";
import CustomerReviews from "./customer-reviews";
import HotelGallery from "./hotel-gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <BookingForm /> */}
      <BestHotel />
      <HotelGallery />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
