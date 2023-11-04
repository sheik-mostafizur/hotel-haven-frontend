import {useParams} from "react-router-dom";
import Main from "../../../layout/main";
import {HashSpinner} from "../../../components/spinner";
import Container from "../../../components/ui/container";
import Button from "../../../components/ui/button";
import GoogleMapReact from "google-map-react";
import {useGetHotelByIdQuery} from "../../../api/public-api";
import {useAppSelector} from "../../../redux/hooks";
const AnyReactComponent = ({text}) => <div>{text}</div>;
interface HotelDetails {
  hotel: {
    photoURL: string;
    name: string;
    rating: number;
    description: string;
    address: {
      location: string;
    };
  };
  rooms: {
    _id: string;
    thumbnails: string[];
    title: string;
    facilities: string[];
    roomInfo: {[key: string]: string};
  }[];
}

const HotelDetails: React.FC = () => {
  const hotelFilter = useAppSelector((state) => state.hotelFilter);
  const {_id} = useParams();
  const {data: viewHotels, isLoading} = useGetHotelByIdQuery({
    _id,
    params: hotelFilter,
  });

  const {hotel} = viewHotels || [];

  const defaultProps = {
    center: {
      lat: hotel?.address?.map?.lat,
      lng: hotel?.address?.map?.lng,
    },
    zoom: 11,
  };

  return (
    <Main>
      <Container>
        {isLoading ? (
          <HashSpinner />
        ) : (
          <>
            {viewHotels ? (
              <>
                <div className="bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
                  <img
                    className="rounded-t-lg h-96 w-full"
                    src={hotel?.photoURL}
                    alt=""
                  />

                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary-900 dark:text-white">
                        {hotel?.name}
                      </h5>
                      <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
                        Location: {hotel?.address?.location}
                      </p>
                      <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
                        Rating: {hotel?.rating}
                      </p>
                      <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
                        {hotel?.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center my-4">
                  <h3>Choose your room</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 justify-center items-center lg:grid-cols-3 2xl:grid-cols-4">
                  {viewHotels.rooms && viewHotels.rooms.length > 0 ? (
                    viewHotels.rooms.map((room) => (
                      <div key={room._id}>
                        <div className=" bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
                          <img
                            className="rounded-t-lg h-80"
                            src={room.thumbnails[0]}
                            alt={room.title}
                          />

                          <div className="p-4">
                            <h5 className="my-2 ">{room.title}</h5>

                            <div className="py-1 ">
                              <strong>Facilities:</strong>
                              <>
                                {room.facilities.map((facility, index) => (
                                  <li key={index}>{facility}</li>
                                ))}
                              </>
                            </div>
                            <div className="mb-3">
                              {Object.keys(room.roomInfo).map((key) => (
                                <p key={key} className="py-1">
                                  <strong>{key}:</strong>
                                  <> {room.roomInfo[key]}</>
                                </p>
                              ))}
                            </div>
                            <Button>Reserve Now</Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No rooms available</p>
                  )}
                </div>
                <div className="my-8" style={{height: "70vh", width: "100%"}}>
                  <GoogleMapReact
                    bootstrapURLKeys={{key: ""}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}>
                    <AnyReactComponent
                      lat={hotel?.address?.map?.lat}
                      lng={hotel?.address?.map?.lng}
                      // text="My Marker"
                    />
                    <map name=""></map>
                  </GoogleMapReact>
                </div>
              </>
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
