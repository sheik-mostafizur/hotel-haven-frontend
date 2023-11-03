import Container from "../../components/ui/container";
import Hotel from "./Hotel";

import {HashSpinner} from "../../components/spinner";
import {useGetHotelsQuery} from "../../api/public-api";
import Button from "../../components/ui/button";
import {Link} from "react-router-dom";

interface HotelType {
  _id: string;
  name: string;
  location: string;
  photoURL: string;
  description: string;
  rating: number;
}

const BestHotel: React.FC = () => {
  const {data, isLoading} = useGetHotelsQuery({limit: 4});
  const initialHotel: HotelType[] = [];
  const hotels = data || initialHotel;

  return (
    <Container className="lg:py-20">
      <div className="mx-auto mb-4">
        <h2 className="text-center">Discover Exceptional Comfort and Luxury</h2>
        <p className="px-4 lg:px-16 text-center py-4 font-normal">
          Indulge in the epitome of opulence at our carefully curated selection
          of top-rated hotels, where unparalleled comfort meets world-className
          hospitality.
        </p>
      </div>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
        {isLoading ? (
          <HashSpinner />
        ) : (
          hotels && hotels.map((hotel) => <Hotel key={hotel._id} {...hotel} />)
        )}
      </div>
      <div className="text-center mt-8">
        <Link to={"/hotel"}>
          <Button size="lg">See more</Button>
        </Link>
      </div>
    </Container>
  );
};

export default BestHotel;
