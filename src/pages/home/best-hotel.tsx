import { useEffect, useState } from "react";
import Container from "../../components/ui/container";
import axios from "axios";
import Room from "./room";

interface BestHotel {
  price: number;
  thumbnailURL: string;
  rating: number;
}

const BestHotel: React.FC = () => {
  const [rooms, setRoom] = useState<BestHotel[]>([]);
  useEffect(() => {
    axios
      .get("/db/best-hotel.json")
      .then(({ data }) => {
        setRoom(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container className="lg:py-20">
      <div className="mx-auto mb-4">
        <h2 className="text-center">Best Hotels</h2>
        <p className="px-4 lg:px-16 text-center py-4 font-normal">
          Discover our pinnacle of luxury at Hotel Heaven's Best Hotels.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {rooms.map((room, index) => (
          <Room key={index} {...room} />
        ))}
      </div>
    </Container>
  );
};

export default BestHotel;
