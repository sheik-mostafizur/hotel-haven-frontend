import React from "react";
import "./Location.css";
interface Location {
  thumbnail: string;
  location: string;
  totalHotel: number;
  _id: string;
}

const Location: React.FC<Location> = ({
  thumbnail,
  location,
  totalHotel,
  _id,
}) => {
  const hotelFilter = (location_name: any) => {
    console.log(location_name);
  };

  return (
    <div
      onClick={() => hotelFilter(_id)}
      id="card"
      className="bg-white mx-auto rounded-lg dark:bg-secondary-700"
    >
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
