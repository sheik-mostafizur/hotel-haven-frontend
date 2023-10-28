import {CSSProperties, useEffect, useState} from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "./Banner";
import BestBlogs from "./BestBlogs";
import BestHotel from "./BestHotel";
import CustomerReviews from "./CustomerReviews";
import HotelGallery from "./HotelGallery";
import TopLocation from "./TopLocation";
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
    }, 1000);
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
