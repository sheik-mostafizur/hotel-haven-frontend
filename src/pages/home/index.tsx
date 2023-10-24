import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "./banner";
import BestBlogs from "./best-blogs";
import BestHotel from "./best-hotel";
// import BookingForm from "./booking-form";
import CustomerReviews from "./customer-reviews";
import HotelGallery from "./hotel-gallery";
// import SearchHome from "./search-home";
import TopLocation from "./top-location";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <SearchHome /> */}
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
