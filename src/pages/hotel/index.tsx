import Container from "../../components/ui/container";
import AllHotelCard from "./AllHotelCard";
import Main from "../../layout/main";
import { useGetHotelsQuery } from "../../api/public-api";
import { HashSpinner } from "../../components/spinner";
import { useAppSelector } from "../../redux/hooks";

interface Hotel {
  _id: string;
  name: string;
  address: {
    location: string;
  };
  description: string;
  photoURL: string;
  rating: number;
}

const Hotel: React.FC = () => {
  const query = useAppSelector((state) => state.hotelFilter);

  const { data: hotels, isLoading } = useGetHotelsQuery(query);

  return (
    <Main>
      <Container>
        {isLoading ? (
          <HashSpinner />
        ) : (
          <>
            <h1 className="text-center"> All Hotel</h1>
            <div className="grid grid-cols-1 my-4 justify-center items-center gap-4 mx-auto">
              {hotels &&
                hotels.map((hotel: Hotel) => (
                  <AllHotelCard key={hotel._id} {...hotel} />
                ))}
            </div>
          </>
        )}
      </Container>
    </Main>
  );
};

export default Hotel;
