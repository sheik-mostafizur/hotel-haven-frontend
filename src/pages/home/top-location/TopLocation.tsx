import Container from "../../../components/ui/container";
import React from "react";
import Location from "./Location";
import { useGetTopLocationsQuery } from "../../../api/public-api";
import LocationSkeleton from "./LocationSkeleton";

interface TopLocationTypes {
  thumbnail: string;
  location: string;
  totalHotel: number;
  _id: string;
}

const TopLocation: React.FC = () => {
  const { data, isLoading } = useGetTopLocationsQuery(undefined);
  const initialLocation: TopLocationTypes[] = [];
  const topLocation = data || initialLocation;

  return (
    <Container className="lg:my-20">
      <div className="text-center mb-6">
        <h2 className="text-center uppercase">
          Explore Most Popular Destinations
        </h2>
        <p>
          Explore our popular destination. This location based on user demand
        </p>
      </div>
      {isLoading ? (
        <LocationSkeleton />
      ) : (
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {topLocation.slice(0, 6).map((l: any) => (
            <Location key={l._id} {...l} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default TopLocation;
