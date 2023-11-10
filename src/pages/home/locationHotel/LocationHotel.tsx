import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { useGetHotelsQuery } from "../../../api/public-api";
import AllHotelCard from "../../hotel/AllHotelCard";
import { HashSpinner } from "../../../components/spinner";

interface Hotel {
  _id: string;
  name: string;
  address: {
    location: string;
  };
  description: string;
  photoURL: string;
}

const LocationHotel: React.FC = () => {
  const query = useAppSelector((state) => state.hotelFilter);
  const { data: hotels, isLoading } = useGetHotelsQuery(query);
  const { location } = useParams();

  const filteredHotels = hotels?.filter(
    (hotel: any) => hotel.address.location === location
  );
  // console.log(filteredHotels);
  return (
    <div>
      <h2 className="text-center">{location}</h2>
      {isLoading ? (
        <HashSpinner />
      ) : (
        <div className="grid grid-cols-1 my-4 justify-center items-center gap-4 md:gap-6 mx-auto">
          {filteredHotels &&
            filteredHotels.map((hotel: Hotel) => (
              <AllHotelCard key={hotel._id} {...hotel} />
            ))}
        </div>
      )}
    </div>
  );
};

export default LocationHotel;
