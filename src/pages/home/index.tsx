import Main from "../../layout/main";
import Banner from "./Banner";
import BestBlogs from "./BestBlogs";
import BestHotel from "./BestHotel";
import CustomerReviews from "./CustomerReviews";
import HotelGallery from "./HotelGallery";
import TopLocation from "./TopLocation";
import SetTitle from "../../components/set-title";

const Home = () => {
  return (
    <Main>
      <SetTitle title="Home" />
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
