import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "./banner";
import BestBlogs from "./best-blogs";
import BestHotel from "./best-hotel";
import CustomerReviews from "./customer-reviews";
import HotelGallery from "./hotel-gallery";
import TopLocation from "./top-location";
import { useState, CSSProperties, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
const Home = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <HashLoader
            color="#f04935"
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Banner />
          <BestHotel />
          <HotelGallery />
          <TopLocation />
          <CustomerReviews />
          <BestBlogs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
