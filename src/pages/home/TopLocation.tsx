import Container from "../../components/ui/container";
import React from "react";
import Location from "./Location";

import { useGetLocationsQuery } from "../../api/public-api";
import { HashSpinner } from "../../components/spinner";

interface TopLocationTypes {
  ThumbnailURL: string;
  name: string;
  total_hotel: number;
  _id: string;
}

const TopLocation: React.FC = () => {
  const { data, isLoading } = useGetLocationsQuery(undefined);
  const initialLocation: TopLocationTypes[] = [];
  const location = data || initialLocation;
  console.log(location);
  return (
    <div className="dark:bg-secondary-700">
      <Container className="lg:py-16">
        <div className="mx-auto mb-4">
          <h2 className="text-center">Explore Most Popular Destinations</h2>
          <p className="px-4 lg:px-16 text-center py-4 font-normal">
            Uncover premier destinations with Hotel Haven. From vibrant Dhaka to
            breathtaking Cox's Bazar, our top locations promise unforgettable
            experiences.
          </p>
        </div>
        {isLoading ? (
          <HashSpinner />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {location.slice(0, 6).map((l: any) => (
              <Location key={l?._id} {...l} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default TopLocation;
