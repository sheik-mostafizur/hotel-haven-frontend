import { useParams } from "react-router-dom";
import Main from "../../../layout/main";
import { HashSpinner } from "../../../components/spinner";
import Container from "../../../components/ui/container";
import GoogleMapReact from "google-map-react";
import { useGetHotelByIdQuery } from "../../../api/public-api";
import { useAppSelector } from "../../../redux/hooks";
import CardRoom from "./CardRoom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
interface HotelDetails {
  hotel: {
    photoURL: string;
    name: string;
    rating: number;
    description: string;
    address: {
      location: string;
      map: {
        lat: number;
        lng: number;
      };
    };
  };
  rooms: {
    _id: string;
    thumbnails: string[];
    title: string;
    facilities: string[];
    roomInfo: { [key: string]: string };
  }[];
}

const HotelDetails: React.FC = () => {
  const hotelFilter = useAppSelector((state) => state.hotelFilter);
  const { _id } = useParams();
  const { data: viewHotels, isLoading } = useGetHotelByIdQuery({
    _id,
    params: hotelFilter,
  });

  const { hotel, rooms } = viewHotels || [];

  const defaultProps = {
    center: {
      lat: hotel?.address?.map?.lat as number,
      lng: hotel?.address?.map?.lng as number,
    },
    zoom: 11,
  };

  // console.log(rooms[0].thumbnails[0]);

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
                  <div className="grid grid-cols-2 items-center gap-1">
                    <div>
                      <img
                        className="rounded-t-lg h-96 w-full"
                        src={hotel?.photoURL}
                        alt="hotel image"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {rooms[0]?.thumbnails[1] ? (
                        <img
                          className="rounded-t-lg h-48 w-full"
                          src={rooms[0]?.thumbnails[1]}
                          alt="Room image"
                        />
                      ) : (
                        <img
                          className="rounded-t-lg h-48 w-full"
                          src="https://media.istockphoto.com/id/1213695547/photo/3d-rendering-of-an-elegant-bedroom.jpg?s=612x612&w=0&k=20&c=yxOoaz2IAd9zvtlXeS-Th-AiXhaCtMIxOONfGbtGeG8="
                          alt="Room image"
                        />
                      )}
                      {rooms[1]?.thumbnails[1] ? (
                        <img
                          className="rounded-t-lg h-48 w-full"
                          src={rooms[1]?.thumbnails[1]}
                          alt="room image"
                        />
                      ) : (
                        <img
                          className="rounded-t-lg h-48 w-full"
                          src="https://images.adsttc.com/media/images/622a/1b96/620b/c901/65c4/d5ff/newsletter/cama-arquitetura-06b.jpg?1646926752"
                          alt="room image"
                        />
                      )}
                      {rooms[0]?.thumbnails[2] ? (
                        <img
                          className="rounded-b-lg h-48 w-full"
                          src={rooms[0].thumbnails[2]}
                          alt="room image"
                        />
                      ) : (
                        <img
                          className="rounded-b-lg h-48 w-full"
                          src="https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg"
                          alt="room image"
                        />
                      )}
                      {rooms[1]?.thumbnails[2] ? (
                        <img
                          className="rounded-b-lg h-48 w-full"
                          src={rooms[1]?.thumbnails[2]}
                          alt="room image"
                        />
                      ) : (
                        <img
                          className="rounded-b-lg h-48 w-full"
                          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNF9waG90b19vZl9hX2ZyYW1lX2luX3RoZV9saXZpbmdfcm9vbV9pbl90aGVfc3R5bF85YWM1MjY1ZS02OTdjLTQ4OWMtYTFmYS03NzgzMjJlMTEwODNfMi5qcGc.jpg"
                          alt="Room image"
                        />
                      )}
                    </div>
                  </div>
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
                    viewHotels?.rooms.map((room: any) => (
                      <CardRoom key={room._id} room={room} />
                    ))
                  ) : (
                    <p>No rooms available</p>
                  )}
                </div>
                <div
                  className="my-8"
                  style={{ height: "500px", width: "100%" }}
                >
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
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
              <>
                <p>No details</p>
              </>
            )}
          </>
        )}
      </Container>
    </Main>
  );
};

export default HotelDetails;
