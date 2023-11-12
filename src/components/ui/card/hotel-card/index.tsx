import {Link} from "react-router-dom";
import React from "react";
import {CiLocationOn} from "react-icons/ci";
import Button from "../../button";

interface HotelCardProps {
  _id: string;
  name: string;
  address: {
    location: string;
  };
  description: string;
  photoURL: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  address,
  name,
  photoURL,
  description,
  _id,
}) => {
  return (
    <div className="w-full flex flex-col mx-auto items-center bg-white border border-secondary-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-secondary-100 dark:border-secondary-800 dark:bg-secondary-800 dark:hover:bg-secondary-700">
      <img
        className="object-cover w-full md:max-w-xs h-full md:h-96 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={photoURL}
        alt={name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2">{name}</h5>
        <p className="mb-3 flex items-center gap-2 font-normal text-secondary-700 dark:text-secondary-400">
          <CiLocationOn /> {address?.location}
        </p>
        <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
          {description}
        </p>
        <Link to={`/hotel/${_id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
