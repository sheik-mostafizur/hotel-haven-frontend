import Main from "../../layout/main";
import Banner from "./Banner";
import BestBlogs from "./BestBlogs";
import BestHotel from "./BestHotel";
import CustomerReviews from "./customer-reviews";
import HotelGallery from "./hotel-gallery";
import TopLocation from "./top-location/TopLocation";
import SetTitle from "../../components/set-title";

const Home = () => {
  return (
    <Main>
      <SetTitle title="Welcome Our Home" />
      <Banner />
      <BestHotel />
      <HotelGallery />
      <TopLocation />
      <CustomerReviews />
      <BestBlogs />
    </Main>
  );
};

export default Home;
