import Container from "../../components/ui/container";
// import { FaStar } from "react-icons/fa";
import {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import fetchData from "../../hooks/fetch-data";

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
    fetchData("/db/customer-reviews.json")
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="lg:py-16 overflow-hidden">
      <div className=" text-center font-extrabold text-primary-500 text-3xl mt-10 mb-10">
        <h2 className="text-center">Customer Testimonials</h2>
      </div>
      <div className="">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-primary-50 p-6 rounded-lg shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
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
                      {/* Rating:{" "} */}
                      <Rating
                        value={review.rating}
                        readOnly={true}
                        style={{maxWidth: "100px"}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                <q className="italic font-mono">{review.review}</q>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CustomerReviews;