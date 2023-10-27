import {useEffect, useState} from "react";
import Container from "../../components/ui/container";
import Hotel from "./Hotel";
import fetchData from "../../hooks/fetch-data";

interface BestHotelTypes {
  _id: number;
  title: string;
  location: string;
  description: string;
  thumbnailURL: string;
  rating: number;
}

const BestHotel: React.FC = () => {
  const [rooms, setRoom] = useState<BestHotelTypes[]>([]);
  useEffect(() => {
    fetchData("/db/best-hotel.json")
      .then((data) => setRoom(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="lg:py-20">
      <div className="mx-auto mb-4">
        <h2 className="text-center">Discover Exceptional Comfort and Luxury</h2>
        <p className="px-4 lg:px-16 text-center py-4 font-normal">
          Indulge in the epitome of opulence at our carefully curated selection
          of top-rated hotels, where unparalleled comfort meets world-class
          hospitality.
        </p>
      </div>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {rooms.map((hotel) => (
          <Hotel key={hotel._id} {...hotel} />
        ))}
      </div>
    </Container>
  );
};

export default BestHotel;
