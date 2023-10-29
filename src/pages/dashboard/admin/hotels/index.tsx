import {useEffect, useState} from "react";
import {axios} from "../../../../api";
import {HashSpinner} from "../../../../components/spinner";

const Hotels: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/admin/hotel")
      .then(({data}) => {
        setHotels(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="pb-4">
        <h2 className="text-center">Our Hotels</h2>
      </div>
      {isLoading ? (
        <HashSpinner />
      ) : (
        hotels.map((hotel: any) => (
          <div className="my-1 bg-primary-50 py-2 px-1" key={hotel._id}>
            <h3>Name: {hotel.name}</h3>
            <p>{JSON.stringify(hotel)}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Hotels;
