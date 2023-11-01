// import {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";
// import {axios} from "../../../../api";
// import toastError from "../../../../utils/toast-error";
// import {HashSpinner} from "../../../../components/spinner";

// const HotelDetails = () => {
//   const {_id} = useParams();
//   const [isLoading, setIsLoading] = useState(false);
//   const [hotelDetails, setHotelDetails] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`/admin/hotel/${_id}`)
//       .then(({data}) => {
//         setIsLoading(false);
//         setHotelDetails(data);
//       })
//       .catch((error: any) => {
//         toastError(error);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <>{isLoading ? <HashSpinner /> : <>{JSON.stringify(hotelDetails)}</>}</>
//   );
// };

// export default HotelDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../../../../api";
import toastError from "../../../../utils/toast-error";
import { HashSpinner } from "../../../../components/spinner";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const HotelDetails = () => {
  const { _id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hotelDetails, setHotelDetails] = useState<any>(null);

  console.log(hotelDetails?.room);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/admin/hotel/${_id}`)
      .then(({ data }) => {
        setIsLoading(false);
        setHotelDetails(data);
      })
      .catch((error: any) => {
        toastError(error);
        setIsLoading(false);
      });
  }, [_id]);

  return (
    // <>{isLoading ? <HashSpinner /> : <>{JSON.stringify(hotelDetails)}</>}</>
    <>
      {isLoading ? (
        <HashSpinner />
      ) : hotelDetails ? (
        <div>
          <h1>Hotel Details</h1>
          <div className="grid md:grid-cols-3 gap-3">
            {hotelDetails?.room.map((room: any, index: number) => (
              <div
                key={index}
                className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Slider autoplay={3000}>
                  {room.thumbnails.map((item: any, index: any) => (
                    <div
                      className="w-fit"
                      key={index}
                      style={{
                        background: `url('${item}') no-repeat center center`,
                      }}
                    >
                      <div className="center">
                        <h1>{item.title}</h1>
                        {/* <p>{item.description}</p>
                        <button>{item.button}</button> */}
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {room.title}
                    </h5>
                    <p>
                      Capacity: Adult: {room.capacity.adult}, Child:{" "}
                      {room.capacity.children}
                    </p>
                  </a>
                  {/* <div className="flex items-center mt-2.5 mb-5">
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      5.0
                    </span>
                  </div> */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
};

export default HotelDetails;
