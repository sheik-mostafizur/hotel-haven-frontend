import Container from "../../components/ui/container";
import {useEffect, useState} from "react";
import Location from "./location";
import fetchData from "../../hooks/fetchData";

interface TopLocation {
  image: string;
  location_name: string;
  total_hotels: number;
}

const TopLocation: React.FC = () => {
  const [topLocation, setTopLocation] = useState<TopLocation[]>([]);

  useEffect(() => {
    fetchData("/db/top-hotel-location.json")
      .then((data) => setTopLocation(data))
      .catch((err) => console.log(err));
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
