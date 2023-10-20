import { useEffect, useState } from "react";
import Container from "../../components/ui/container";
import axios from "axios";
import Room from "./room";
interface BestRoom {
  src: string;
  alt: string;
}

const BestHotel = () => {
  const [rooms, setRoom] = useState<BestRoom[]>([]);
  useEffect(() => {
    axios
      .get("/db/bestRoom.json")
      .then(({ data }) => {
        setRoom(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container className="lg:py-16">
      <div className="mx-auto mb-4">
        <h2 className="text-center">Hotel Heavens Best Rooms & Suites</h2>
        <p className="px-4 lg:px-16 text-center py-4 font-normal">
          Discover our pinnacle of luxury at Hotel Heaven's Best Hotels. From
          opulent suites to personalized service, our selection offers the
          epitome of comfort and elegance.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto"></div>
    </Container>
  );
};

export default BestHotel;
