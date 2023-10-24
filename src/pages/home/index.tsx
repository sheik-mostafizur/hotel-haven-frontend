import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "./banner";
import BestHotel from "./best-hotel";
// import BookingForm from "./booking-form";
import CustomerReviews from "./customer-reviews";
import HotelGallery from "./hotel-gallery";
import TopLocation from "./top-location";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <BookingForm /> */}
      <BestHotel />
      <HotelGallery />
      <TopLocation />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
