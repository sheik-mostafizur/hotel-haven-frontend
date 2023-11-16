import Container from "../../../components/ui/container";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useGetHotelReviewByIdQuery } from "../../../api/public-api";
// import CustomerReviewsSkeleton from "./CustomerReviewsSkeleton";

interface CustomerReviews {
  _id: number;
  name: string;
  review: string;
  rating: number;
  profileURL: string;
}

const CustomerReviews: React.FC = () => {
  const { data: reviews, isLoading: reviewLoading } =
    useGetHotelReviewByIdQuery("65404fb8a56e13bc02c8c037");
  return (
    <div className="bg-primary-50 dark:bg-secondary-900">
      <Container className="lg:my-20 overflow-hidden">
        <div className="mx-auto text-center py-4">
          <h2 className="uppercase"> Customer Reviews</h2>
          <p className="text-center">
            Discover what our customers have to say about their experiences with
            our products.
          </p>
        </div>
        <div style={{ cursor: "grab" }}>
          <Swiper
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
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
              {reviews?.slice(0, 15).map((review: any) => (
                <SwiperSlide
                  key={review._id}
                  className="bg-white p-4 rounded-lg h-80 shadow-md  dark:bg-secondary-800 dark:border-secondary-800"
                  data-aos="fade-up"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={review.userProfile}
                      alt={review.userName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-3">
                      <h3 className="text-xl font-semibold">
                        {review.userName}
                      </h3>
                      <div className="flex items-center">
                        <div className="font-semibold font-mono text-lg">
                          <Rating
                            value={review.rating}
                            readOnly={true}
                            style={{ maxWidth: "100px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary-700 my-auto h-52">
                    <q className="italic font-mono">{review.feedback}</q>
                  </p>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviews;
