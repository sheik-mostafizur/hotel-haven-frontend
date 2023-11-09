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
  return (
    <div className="content-to-animate overflow-hidden shadow rounded-lg">
      <div className=" bg-white h-full border border-secondary-50 dark:bg-secondary-800 dark:border-secondary-800">
        <LazyLoad>
          <img className="rounded-t-lg w-full h-80" src={photoURL} alt="" />
        </LazyLoad>
        <div className="p-5">
          <h4 className="py-2 h-12">{name}</h4>
          <p className="py-4 flex h-20 items-center gap-2">
            <CiLocationOn /> {address?.location}
          </p>
          <p className="py-2 text-sm h-32">{description}</p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400"></p>
          <Link to={`/hotel/${_id}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
