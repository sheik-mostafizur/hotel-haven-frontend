import React from "react";
import "./Location.css";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {setHotelFilter} from "../../redux/hotel-filter-slice";
import {useAppDispatch} from "../../redux/hooks";
interface Location {
  thumbnail: string;
  location: string;
  totalHotel: number;
  _id: string;
}

const Location: React.FC<Location> = ({thumbnail, location, totalHotel}) => {
  const locationURL = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const hotelFilter = () => {
    dispatch(setHotelFilter({location}));
    if (locationURL.pathname == "/") {
      navigate("/hotel");
    }
  };

  return (
    <div
      onClick={hotelFilter}
      id="card"
      className="bg-white mx-auto rounded-lg dark:bg-secondary-700">
      <img
        id="className-img"
        className="w-full h-80 "
        src={thumbnail}
        alt="image"
      />
      <div className="" id="card-body">
        <h3 id="title" className=" text-white">
          Location: {location}
        </h3>
        <p id="info" className=" text-white">
          Total Hotel: {totalHotel}
        </p>
      </div>
    </div>
  );
};

export default Location;
