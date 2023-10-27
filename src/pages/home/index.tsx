import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "./Banner";
import BestBlogs from "./BestBlogs";
import BestHotel from "./BestHotel";

// import BookingForm from "./booking-form";
import CustomerReviews from "./CustomerReviews";
import HotelGallery from "./HotelGallery";
import TopLocation from "./TopLocation";

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
      <BestBlogs />
      <Footer />
    </>
  );
};

export default Home;
