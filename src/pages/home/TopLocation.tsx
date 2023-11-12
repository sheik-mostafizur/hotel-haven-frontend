import Container from "../../components/ui/container";
import React from "react";
import Location from "./Location";
import {useGetTopLocationsQuery} from "../../api/public-api";
import {HashSpinner} from "../../components/spinner";

interface TopLocationTypes {
  thumbnail: string;
  location: string;
  totalHotel: number;
  _id: string;
}

const TopLocation: React.FC = () => {
  const {data, isLoading} = useGetTopLocationsQuery(undefined);
  const initialLocation: TopLocationTypes[] = [];
  const topLocation = data || initialLocation;

  return (
    <Container className="lg:py-16">
      <div className="mx-auto mb-4">
        <h2 className="text-center">Explore Most Popular Destinations</h2>
      </div>
      {isLoading ? (
        <HashSpinner />
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
