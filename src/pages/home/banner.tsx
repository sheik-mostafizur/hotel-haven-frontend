// import Swiper styles

import Container from "../../components/ui/container";
import "./banner.css";

// import Button from "../../components/ui/button";
const Banner = () => {
  return (
    <Container>
      {/*  */}
      <div className="img md:py-32 lg:py-56">
        <div className="lg:pl-6 py-20 lg:py-0">
          <h1 className="text-white">
            Discover <br /> Tranquility at
            <span className="text-primary-500">Hotel Haven</span>
          </h1>
          <p className="text-white lg:w-96 hidden md:block md:pe-96 lg:px-0">
            Welcome to Hotel Haven, where luxury meets serenity.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
