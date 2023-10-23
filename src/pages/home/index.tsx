import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Container from "../../components/ui/container";
// import Container from "../../components/ui/container";
import Banner from "./banner";
import BestHotel from "./best-hotel";
// import BookingForm from "./booking-form";
import CustomerReviews from "./customer-reviews";
import HotelGallery from "./hotel-gallery";
import HotelPlans from "./hotel-plans";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      {/* <BookingForm /> */}
      <BestHotel />
      <HotelGallery />
      <CustomerReviews />
      <HotelPlans />
      <Footer />
    </Container>
  );
};

export default Home;
