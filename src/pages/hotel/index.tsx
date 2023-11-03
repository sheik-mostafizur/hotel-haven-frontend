import Container from "../../components/ui/container";
import AllHotelCard from "./AllHotelCard";
import Main from "../../layout/main";
import {useGetHotelsQuery} from "../../api/public-api";
import {HashSpinner} from "../../components/spinner";

const Hotel: React.FC = () => {
  const {data: hotels, isLoading} = useGetHotelsQuery(undefined);

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
                hotels.map((hotel) => (
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
