import Container from "../../components/ui/container";
import React, { useEffect, useState } from "react";
import Location from "./Location";
import fetchData from "../../hooks/fetch-data";

interface TopLocationTypes {
  image: string;
  location_name: string;
  total_hotels: number;
}

const TopLocation: React.FC = () => {
  const [topLocation, setTopLocation] = useState<TopLocationTypes[]>([]);

  useEffect(() => {
    fetchData("/db/top-hotel-location.json")
      .then((data) => setTopLocation(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="dark:bg-secondary-700">
      <Container className="lg:py-16">
        <div className="mx-auto mb-4">
          <h2 className="text-center">Explore Most Popular Destinations</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {topLocation.splice(0, 6).map((l, index) => (
            <Location key={index} {...l} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopLocation;
