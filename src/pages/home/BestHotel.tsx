import Container from "../../components/ui/container";
import Hotel from "./Hotel";
// import { HashSpinner } from "../../components/spinner";
import { useGetHotelsQuery } from "../../api/public-api";
import React from "react";
import HotelSkeleton from "../../components/skeleton/hotel-skeleton";

interface HotelType {
  _id: string;
  name: string;
  address: {
    location: string;
  };
  photoURL: string;
  description: string;
}

const BestHotel: React.FC = () => {
  const { data, isLoading } = useGetHotelsQuery({ limit: 4 });
  const initialHotel: HotelType[] = [];
  const hotels = data || initialHotel;

  return (
    <div className="dark:bg-secondary-700">
      <Container className="lg:py-20">
        <div className="mx-auto mb-4">
          <h2 className="text-center">
            Discover Exceptional Comfort and Luxury
          </h2>
          <p className="px-4 lg:px-16 text-center py-4 font-normal">
            Indulge in the epitome of opulence at our carefully curated
            selection of top-rated hotels, where unparalleled comfort meets
            world-className hospitality.
          </p>
        </div>
        {isLoading ? (
          <HotelSkeleton />
        ) : (
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto">
            {hotels &&
              hotels.map((hotel: any) => <Hotel key={hotel._id} {...hotel} />)}
          </div>
        )}
      </Container>
    </div>
  );
};

export default BestHotel;
