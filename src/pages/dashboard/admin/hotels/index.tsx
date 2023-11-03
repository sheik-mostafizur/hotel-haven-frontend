
import { useEffect, useState } from "react";
import { axios } from "../../../../api";
import { HashSpinner } from "../../../../components/spinner";
import HotelCard from "./HotelCard";
import { HotelType } from "../../../../types";

const Hotels: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState<HotelType.Hotel[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/admin/hotel")
      .then(({ data }) => {
        setHotels(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  }, []);
  // console.log(hotels);
  return (
    <>
      <div className="pb-4">
        <h2 className="text-center">Our Hotels</h2>
      </div>
      {isLoading ? (
        <HashSpinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hotels.map((hotel: any) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      )}
    </>
  );
};

export default Hotels;
