import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import LazyLoad from "react-lazy-load";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

interface HotelType {
  _id: string;
  name: string;
  address: {
    location: string;
  };
  photoURL: string;
  description: string;
  rating: number;
}

const Hotel: React.FC<HotelType> = ({
  address,
  name,
  photoURL,
  description,
  _id,
}) => {
  // bg-white className=" h-full border border-secondary-50 dark:bg-secondary-800 dark:border-secondary-800"
  return (
    <Link to={`/hotel/${_id}`}>
      <figure className="relative transition-all cursor-pointer filter ">
        <div style={{ position: "relative", display: "block" }}>
          <img
            className="rounded-lg h-96"
            src={photoURL}
            alt="image description"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // Black overlay with 0.5 opacity
            }}
          ></div>
          <figcaption className="absolute px-4 text-lg bottom-6">
            <h3 className="text-white">{name}</h3>
          </figcaption>
        </div>
      </figure>
    </Link>
  );
};

export default Hotel;
