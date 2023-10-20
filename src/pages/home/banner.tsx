// import Swiper styles
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import {Pagination, Navigation} from "swiper/modules";
import Button from "../../components/ui/button";
// const swiper = new Swiper(...);
const Banner = () => {
  return (
    <div className="hidden md:block">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper max-h-[700px]">
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-screen max-h-screen"
              src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="text-center absolute text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-3xl lg:text-5xl text-white lg:my-2 lg:font-semibold">
              Welcome to paradise
              <span className="text-primary-100">Hotel Heaven</span> awaits!
            </h2>
            <p className="px-4 lg:px-16 text-white lg:my-2 lg:font-medium">
              Escape to a world of opulence and serenity. Hotel Heaven promises
              an unforgettable experience of luxury, comfort and hospitality.
            </p>
            <div>
              <Button>Explore More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-screen max-h-screen"
              src="https://media.istockphoto.com/id/1454303048/photo/modern-dark-luxury-minimalist-bathroom.webp?b=1&s=170667a&w=0&k=20&c=HypVG6boqfxNqA8B6qbuWtB_rr0m6-ZDWIfiF0mQMpA="
              alt=""
            />
          </div>
          <div className="text-center absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-3xl lg:text-5xl text-white lg:my-2 lg:font-semibold">
              Experience Luxury Redefined at Hotel Heaven
            </h2>
            <p className="px-4 lg:px-16 text-white lg:my-2 font-medium">
              At Hotel Heaven, every moment is a masterpiece. Immerse yourself
              in a haven of indulgence and relaxation
            </p>
            <div>
              <Button>Explore More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-screen max-h-screen"
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="text-center absolute text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-3xl lg:text-5xl text-white lg:my-2 lg:font-semibold">
              Your Dream Getaway: Hotel Heaven Beckons
            </h2>
            <p className="px-4 lg:px-16 text-white lg:my-2 font-medium">
              Escape to a world of opulence and serenity. Hotel Heaven promises
              an unforgettable experience of luxury, comfort and hospitality.
            </p>
            <div>
              <Button>Explore More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-screen max-h-screen"
              src="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="text-center absolute text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-3xl lg:text-5xl text-white lg:my-2 lg:font-semibold">
              Discover Elegance at Hotel Heaven
            </h2>
            <p className="px-4 lg:px-16 text-white lg:my-2 font-medium">
              Experience the pinnacle of hospitality at Hotel Heaven. Your
              journey to pure relaxation begins here.
            </p>
            <div>
              <Button>Explore More</Button>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
