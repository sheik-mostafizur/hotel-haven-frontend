import useSetTitle from "../../hooks/useSetTitle";
import Main from "../../layout/main";
import Banner from "./Banner";
import BestBlogs from "./BestBlogs";
import BestHotel from "./BestHotel";
import CustomerReviews from "./CustomerReviews";
import HotelGallery from "./HotelGallery";
import TopLocation from "./TopLocation";

const Home = () => {
  useSetTitle("Home");
  return (
    <Main>
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
