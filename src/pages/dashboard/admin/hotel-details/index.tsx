
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../../../../api";
import toastError from "../../../../utils/toast-error";
import { HashSpinner } from "../../../../components/spinner";

const HotelDetails = () => {
  const { _id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hotelDetails, setHotelDetails] = useState(null);

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
  }, []);

import {Link, useParams} from "react-router-dom";
import {HashSpinner} from "../../../../components/spinner";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import {FaLocationDot} from "react-icons/fa6";
import {FaChild, FaPeopleArrows} from "react-icons/fa";
import {MdBedroomParent} from "react-icons/md";
import {FcManager, FcMoneyTransfer} from "react-icons/fc";
import {BiSolidOffer} from "react-icons/bi";
import {HiInformationCircle} from "react-icons/hi2";
import Button from "../../../../components/ui/button";
import {useGetHotelsByIdAdminQuery} from "../../../../api/admin-api";

const HotelDetails = () => {
  const {_id} = useParams();
  const {data: hotelDetails, isLoading} = useGetHotelsByIdAdminQuery(_id);



  return (

    <>{isLoading ? <HashSpinner /> : <>
      {JSON.stringify(hotelDetails)}
    </>}</>

    <>
      {isLoading ? (
        <HashSpinner />
      ) : hotelDetails ? (
        <div>
          <h1 className="text-center">Hotel Details & Rooms</h1>
          <div>
            <h3 className="font-bold my-3"> {hotelDetails?.hotel.name}</h3>
            <h6 className="font-medium my-3 flex items-center gap-2">
              <FcManager />{" "}
              <span> Manager: {hotelDetails?.hotel.managerName}</span>
            </h6>
            <div className="flex items-center gap-6 mb-3">
              <p className="flex items-center gap-2">
                {" "}
                <span className="flex gap-2 items-center">
                  <FaLocationDot />{" "}
                  <span>{hotelDetails?.hotel.address.location}</span>
                </span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <MdBedroomParent />{" "}
                <span>
                  Available Rooms: {hotelDetails?.hotel.availableRoom}
                </span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3 justify-center items-center">
            {hotelDetails?.room.map((room: any, index: number) => (
              <div
                key={index}
                className=" w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Slider autoplay={3000}>
                  {room.thumbnails.map((item: any, index: any) => (
                    <div
                      className="w-fit"
                      key={index}
                      style={{
                        background: `url('${item}') no-repeat center center`,
                      }}>
                      <div className="center">
                        <h1>{item.title}</h1>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="px-5 pb-5 gap-y-6">
                  <div className="">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white my-2">
                      {room.title}
                    </h5>
                    <p className="flex gap-3 mb-2">
                      <span className="flex gap-1 justify-center items-center">
                        {" "}
                        <FaPeopleArrows />{" "}
                        <span>Adult: {room.capacity.adult}</span>
                      </span>
                      <span className="flex gap-1 items-center justify-center">
                        <FaChild />
                        <span>Child: {room.capacity.children}</span>
                      </span>
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">
                        {" "}
                        <span className="flex items-center gap-2">
                          <BiSolidOffer /> <span>Facilities:</span>
                        </span>
                      </span>
                      <ul className="ms-8" style={{listStyleType: "disc"}}>
                        {room.facilities.map((facility: any, index: any) => (
                          <li key={index}>{facility}</li>
                        ))}
                      </ul>
                    </p>
                    <div className="mb-2">
                      <span className="flex items-center gap-2">
                        <HiInformationCircle />{" "}
                        <span className="font-medium">Other Information:</span>
                      </span>
                      <ul className="ms-8" style={{listStyleType: "square"}}>
                        <li> {room.roomInfo?.bedType}</li>
                        <li> {room.roomInfo?.roomSize}</li>
                        <li> {room.roomInfo?.view}</li>
                        <li> {room.roomInfo?.additionalInfo}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className=" text-gray-900 dark:text-white flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        {" "}
                        <FcMoneyTransfer />{" "}
                        <span className="font-medium">Price:</span>
                      </span>
                      <span
                        className="text-sm"
                        style={{textDecoration: "line-through"}}>
                        BDT {room.roomInfo?.regularPrice}
                      </span>
                      <span>BDT {room.roomInfo?.discountedPrice}</span>
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <Link to="/admin/hotels">
                      <Button size="sm">See All Hotels</Button>
                    </Link>
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
