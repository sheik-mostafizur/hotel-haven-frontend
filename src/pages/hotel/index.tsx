import { useEffect, useState } from "react";
import { axios } from "../../api";
import Container from "../../components/ui/container";
import AllHotelCard from "./AllHotelCard";
import Main from "../../layout/main";

interface Hotels {
  _id: string;
  name: string;
  location: string;
  description: string;
  photoURL: string;
  rating: number;
}

const Hotel: React.FC = () => {
  const [hotels, setHotels] = useState<Hotels[]>([]);
  useEffect(() => {
    axios
      .get("/public/hotel")
      .then(({ data }) => {
        setHotels(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(hotels);
  return (
    <Main>
      <Container>
        <h1 className="text-center"> All Hotel</h1>
        <div className="grid grid-cols-1 my-4 justify-center items-center gap-4 mx-auto">
          {hotels.map((hotel) => (
            <AllHotelCard key={hotel._id} {...hotel} />
          ))}
        </div>
      </Container>
    </Main>
  );
};

export default Hotel;
