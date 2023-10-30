import {useEffect, useState} from "react";
import {axios} from "../../../../api";
import {HashSpinner} from "../../../../components/spinner";
import HotelCard from "./HotelCard";

interface Hotels {
  name: string;
  photoURL: string;
  address: {
    thumbnailURL: string;
    location: string;
    map: {lat: string; lng: string};
  };
  availableRoom: number;
  description: string;
  _id: string;
}

const Hotels: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState<Hotels[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/admin/hotel")
      .then(({data}) => {
        setHotels(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="pb-4">
        <h2 className="text-center">Our Hotels</h2>
      </div>
      {isLoading ? (
        <HashSpinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      )}
    </>
  );
};

export default Hotels;
