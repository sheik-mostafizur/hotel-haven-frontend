import { useParams } from "react-router-dom";
// import useAxiosGet from "../../../hooks/useAxiosGet";
import Main from "../../../layout/main";
import { HashSpinner } from "../../../components/spinner";
import Container from "../../../components/ui/container";
import { useEffect, useState } from "react";
import { axios } from "../../../api";
import Button from "../../../components/ui/button";
interface HotelDetails {
  // hotel: object;/
  hotel: {
    photoURL: string;
    name: string;
    rating: number;
    description: string;
    address: {
      location: string;
    };
  };
  rooms: object;
}

const HotelDetails: React.FC = () => {
  const { _id } = useParams();
  const [viewHotels, setViewHotels] = useState<HotelDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`hotel/${_id}`)
      .then(({ data }) => {
        setViewHotels(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  // const hotelDetails = viewHotels.hotel;
  // console.log(viewHotels);
  const { hotel } = viewHotels;
  // console.log(viewHotels.rooms);

  return (
    <Main>
      <Container>
        {isLoading ? (
          <HashSpinner />
        ) : (
          <>
            {viewHotels ? (
              <Container>
                <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="rounded-t-lg h-96 w-full"
                    src={hotel?.photoURL}
                    alt=""
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {hotel?.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Location: {hotel?.address?.location}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Rating: {hotel?.rating}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {hotel?.description}
                    </p>
                  </div>
                </div>
                <div className="text-center my-4">
                  <h3>Choose your room</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 justify-center items-center lg:grid-cols-3">
                  {viewHotels.rooms && viewHotels.rooms.length > 0 ? (
                    viewHotels.rooms.map((room) => (
                      <div key={room._id}>
                        <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <img
                            className="rounded-t-lg h-80"
                            src={room.thumbnails[0]}
                            alt={room.title}
                          />

                          <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              Type: {room.title}
                            </h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              Facilities:
                              <>
                                {room.facilities.map((facility, index) => (
                                  <li key={index}>{facility}</li>
                                ))}
                              </>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                              Room Info:
                              {Object.keys(room.roomInfo).map((key) => (
                                <p key={key}>
                                  <strong>{key}:</strong> {room.roomInfo[key]}
                                </p>
                              ))}
                            </p>
                            <Button>Reserve Now</Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No rooms available</p>
                  )}
                </div>
              </Container>
            ) : (
              <></>
            )}
          </>
        )}
      </Container>
    </Main>
  );
};

export default HotelDetails;
