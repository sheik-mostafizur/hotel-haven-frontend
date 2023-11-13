import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CustomerReviewsSkeleton = () => {
  return (
    <div>
      <div style={{ cursor: "grab" }}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <div>
            <SwiperSlide
              className="bg-white p-4 border rounded-lg h-80 shadow-md  dark:bg-secondary-800 dark:border-secondary-800"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-cover bg-secondary-200"></div>
                <div className="ml-3">
                  <h3 className="text-xl w-20 h-4 mb-2 bg-secondary-200 font-semibold "></h3>
                  <div className="flex items-center ">
                    <div className="font-semibold w-20 h-4 bg-secondary-200 font-mono text-lg"></div>
                  </div>
                </div>
              </div>
              <p className="my-auto h-52 bg-secondary-200">
                <p className="italic w-full font-mono "></p>
              </p>
            </SwiperSlide>
            <SwiperSlide
              className="bg-white p-4 border rounded-lg h-80 shadow-md  dark:bg-secondary-800 dark:border-secondary-800"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-cover bg-secondary-200"></div>
                <div className="ml-3">
                  <h3 className="text-xl w-20 h-4 mb-2 bg-secondary-200 font-semibold "></h3>
                  <div className="flex items-center ">
                    <div className="font-semibold w-20 h-4 bg-secondary-200 font-mono text-lg"></div>
                  </div>
                </div>
              </div>
              <p className="my-auto h-52 bg-secondary-200">
                <p className="italic w-full font-mono "></p>
              </p>
            </SwiperSlide>
            <SwiperSlide
              className="bg-white p-4 border rounded-lg h-80 shadow-md  dark:bg-secondary-800 dark:border-secondary-800"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-cover bg-secondary-200"></div>
                <div className="ml-3">
                  <h3 className="text-xl w-20 h-4 mb-2 bg-secondary-200 font-semibold "></h3>
                  <div className="flex items-center ">
                    <div className="font-semibold w-20 h-4 bg-secondary-200 font-mono text-lg"></div>
                  </div>
                </div>
              </div>
              <p className="my-auto h-52 bg-secondary-200">
                <p className="italic w-full font-mono "></p>
              </p>
            </SwiperSlide>
            <SwiperSlide
              className="bg-white p-4 border rounded-lg h-80 shadow-md  dark:bg-secondary-800 dark:border-secondary-800"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-cover bg-secondary-200"></div>
                <div className="ml-3">
                  <h3 className="text-xl w-20 h-4 mb-2 bg-secondary-200 font-semibold "></h3>
                  <div className="flex items-center ">
                    <div className="font-semibold w-20 h-4 bg-secondary-200 font-mono text-lg"></div>
                  </div>
                </div>
              </div>
              <p className="my-auto h-52 bg-secondary-200">
                <p className="italic w-full font-mono "></p>
              </p>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviewsSkeleton;
