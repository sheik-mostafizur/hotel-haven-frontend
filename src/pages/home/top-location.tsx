import Container from "../../components/ui/container";
import axios from "axios";
import { useEffect, useState } from "react";
import Location from "./location";

interface TopLocation {
  image: string;
  location_name: string;
  total_hotels: number;
}

const TopLocation: React.FC = () => {
  const [topLocation, setTopLocation] = useState<TopLocation[]>([]);

  useEffect(() => {
    axios
      .get("/db/top-hotel-location.json")
      .then((res) => {
        setTopLocation(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Container className="lg:py-16">
      <div className="mx-auto mb-4">
        <h2 className="text-center">Explore Most Popular Destinations</h2>
        <p className="px-4 lg:px-16 text-center py-4 font-normal">
          Uncover premier destinations with Hotel Haven. From vibrant Dhaka to
          breathtaking Cox's Bazar, our top locations promise unforgettable
          experiences.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {topLocation.map((l, index) => (
          <Location key={index} {...l} />
        ))}
      </div>
    </Container>
  );
};

export default TopLocation;
