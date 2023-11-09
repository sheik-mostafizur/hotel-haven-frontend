import Container from "../../components/ui/container";
import {Rating} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";

interface CustomerReviews {
  _id: number;
  name: string;
  review: string;
  rating: number;
  profileURL: string;
}

const CustomerReviews: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReviews[]>([]);

  useEffect(() => {
    axios
      .get("/db/customer-reviews.json")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="dark:bg-secondary-700">
      <Container className="lg:py-16 overflow-hidden">
        <div className="mx-auto text-center py-4">
          <h2 className=""> Customer Reviews</h2>
          <p className="px-4 lg:px-16 text-center py-2 font-normal">
            Discover what our customers have to say about their experiences with
            our products. Read their honest and heartfelt reviews to learn why
            they love our toys and games.
          </p>
        </div>
        <div style={{cursor: "grab"}}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            <div>
              {reviews.map((review) => (
                <SwiperSlide
                  key={review._id}
                  className="bg-white p-4 rounded-lg h-80 shadow-md  dark:bg-secondary-800 dark:border-secondary-800"
                  data-aos="fade-up">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.profileURL}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-3">
                      <h3 className="text-xl font-semibold">{review.name}</h3>
                      <div className="flex items-center">
                        <div className="font-semibold font-mono text-lg">
                          <Rating
                            value={review.rating}
                            readOnly={true}
                            style={{maxWidth: "100px"}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-secondary-700 h-52">
                    <q className="italic font-mono">{review.review}</q>
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
