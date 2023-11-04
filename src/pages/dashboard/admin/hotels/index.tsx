import {HashSpinner} from "../../../../components/spinner";
import HotelCard from "./HotelCard";
import {useGetHotelsAdminQuery} from "../../../../api/admin-api";

const Hotels: React.FC = () => {
  const {data: hotels, isLoading} = useGetHotelsAdminQuery(undefined);

  return (
    <>
      <div className="pb-4">
        <h2 className="text-center">Our Hotels</h2>
      </div>
      {isLoading ? (
        <HashSpinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hotels &&
            hotels.map((hotel: any) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
        </div>
      )}
    </>
  );
};

export default Hotels;
