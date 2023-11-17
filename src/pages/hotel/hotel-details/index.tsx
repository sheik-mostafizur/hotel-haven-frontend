import {useParams} from "react-router-dom";
import Main from "../../../layout/main";
import {Rating} from "@smastrom/react-rating";
import {HashSpinner} from "../../../components/spinner";
import Container from "../../../components/ui/container";
import GoogleMapReact from "google-map-react";
import {
  useGetHotelByIdQuery,
  useGetHotelReviewByIdQuery,
} from "../../../api/public-api";
import {useAppSelector} from "../../../redux/hooks";
import CardRoom from "./CardRoom";
import RatingPopUp from "../../../components/RatingPopUp";
import SetTitle from "../../../components/set-title";
import formatPostDate from "../../../utils/format-post-date";
import Header from "./Header";
import Filter from "./Filter";

interface HotelDetails {
  hotel: {
    photoURL: string;
    name: string;
    rating: number;
    description: string;
    address: {
      location: string;
      map: {
        lat: number | undefined;
        lng: number | undefined;
      };
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

interface MarkerProps {
  lat: any;
  lng: any;
  text: any;
}

const AnyReactComponent: React.FC<MarkerProps> = ({
  lat,
  lng,
  text,
}: MarkerProps) => (
  <div>
    <div>Latitude: {lat}</div>
    <div>Longitude: {lng}</div>
    <div>{text}</div>
  </div>
);

const HotelDetails: React.FC = () => {
  const hotelFilter = useAppSelector((state) => state.hotelFilter);

  const {_id} = useParams();
  const {data: viewHotels, isLoading} = useGetHotelByIdQuery({
    _id,
    params: hotelFilter,
  });
  const {data: review} = useGetHotelReviewByIdQuery(_id);

  const totalRating = review?.reduce((total: any, reviews: any) => {
    if (reviews.rating) total += reviews.rating;
    return total;
  }, 0);

  const avgRating = totalRating / review?.length;

  const {hotel, rooms} = viewHotels || [];

  let roomsURL = rooms?.map((room: any) => room.thumbnails) || [];
  roomsURL = [].concat(...roomsURL);

  const headerData = {
    isLoading,
    hotelPhotoURL: hotel?.photoURL,
    name: hotel?.name,
    location: hotel?.address?.location,
    rating: avgRating || 0,
    description: hotel?.description,
    roomsURL: roomsURL.slice(0, 4),
  };

  const defaultProps: any = {
    center: {
      lat: hotel?.address?.map?.lat as number,
      lng: hotel?.address?.map?.lng as number,
    },
    zoom: 11,
  };

  return (
    <Main>
      <SetTitle title={`${hotel?.name || "Hotel"}`} />
      <Header {...headerData} />
      <Filter isLoading={isLoading} />
      <Container>
        {isLoading ? (
          <HashSpinner />
        ) : (
          <>
            {viewHotels ? (
              <>
                <div className="grid md:grid-cols-2 gap-4 justify-center items-center lg:grid-cols-3 2xl:grid-cols-4">
                  {viewHotels.rooms && viewHotels.rooms.length > 0 ? (
                    viewHotels?.rooms.map((room: any) => (
                      <CardRoom key={room._id} room={room} />
                    ))
                  ) : (
                    <p>No rooms available</p>
                  )}
                </div>

                <div className=" p-6 my-6 grid lg:grid-cols-3 gap-2  bg-white border border-secondary-200 rounded-lg shadow hover:bg-secondary-100 dark:bg-secondary-800 dark:border-secondary-800 dark:hover:bg-secondary-700">
                  <div className="w-52">
                    <h3 className="my-2">Fees & policies</h3>
                  </div>
                  <div className="w-full col-span-2">
                    <div className="">
                      <h5>Optional extras</h5>
                      <li>
                        <span className="font-medium">Buffet breakfast</span> is
                        offered for an extra charge of approximately BDT 2200
                        per person.
                      </li>
                      <li>
                        <span className="font-medium">Airport</span> shuttle
                        service is offered for an extra charge of BDT 2000 per
                        room (one-way)
                      </li>
                    </div>
                    <div className="my-8">
                      <h5>Children & extra beds</h5>
                      <li>
                        Supervised childcare is available for an extra charge
                      </li>
                      <li>
                        Cribs/infant beds are available for BDT 25 per night
                      </li>
                      <li>
                        Airport shuttle for children between the ages of 2 and
                        12 costs BDT 2000 (one-way)
                      </li>
                    </div>
                    <div className="my-8">
                      <h5>Pool, spa, & gym (if applicable)</h5>
                      <li>Pool access available from 8:00 AM to 6:00 PM</li>
                      <li>
                        Reservations are required for spa treatments and can be
                        made by contacting the property before arrival at the
                        number on the booking confirmation
                      </li>
                    </div>
                    <div className="my-8">
                      <h5>Hygiene & cleanliness</h5>
                      <p>
                        <small>
                          This property advises that enhanced cleaning and guest
                          safety measures are currently in place. <br />
                          Disinfectant is used to clean the property;
                          commonly-touched surfaces are cleaned with
                          disinfectant between stays; bed sheets and towels are
                          laundered at a temperature of at least 60°C/140°F.{" "}
                          <br /> Social distancing measures are in place; staff
                          at the property wear personal protective equipment;
                          guests are provided with hand sanitizer. <br /> <br />{" "}
                          Contactless check-in and contactless check-out are
                          available. <br /> Each guestroom is kept vacant for a
                          minimum of 72 hours between bookings.
                        </small>
                      </p>
                    </div>
                    <div className="my-8">
                      <h5>Policies</h5>
                      <p>
                        <small>
                          The property has connecting/adjoining rooms, which are
                          subject to availability and can be requested by
                          contacting the property using the number on the
                          booking confirmation.
                          <br /> Guests can rest easy knowing there's a fire
                          extinguisher, a smoke detector, and a first aid kit on
                          site. <br /> This property accepts credit cards and
                          cash. <br /> Please note that cultural norms and guest
                          policies may differ by country and by property. The
                          policies listed are provided by the property.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 lg:my-16">
                  <RatingPopUp hotelId={hotel?._id} />
                  <div className="mx-auto">
                    <h2 className="text-center">Customer reviews</h2>
                    <p className="text-center">
                      Total reviews: {""}
                      {review?.length}
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Rating
                        value={avgRating}
                        readOnly={true}
                        style={{maxWidth: "100px"}}
                      />
                      <p>{avgRating || 0} out of 5</p>
                    </div>
                    {review?.map((rev: any) => (
                      <div
                        key={rev._id}
                        className=" p-4 bg-white  rounded-lg dark:bg-gray-800 ">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <img
                              className="rounded-full w-12 h-12"
                              src={rev?.userProfile}
                              alt=""
                            />
                            <div>
                              <h5>{rev?.userName}</h5>
                              <Rating
                                value={rev?.rating}
                                readOnly={true}
                                style={{maxWidth: "100px"}}
                              />
                            </div>
                          </div>
                          <div>
                            <p>{formatPostDate(rev?.createdAt)}</p>
                          </div>
                        </div>
                        <p className="my-3 font-normal text-gray-500 dark:text-gray-400">
                          {rev?.feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="my-6 bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-800"
                  style={{height: "500px", width: "100%"}}>
                  <GoogleMapReact
                    bootstrapURLKeys={{key: ""}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}>
                    <AnyReactComponent
                      lat={hotel?.address?.map?.lat}
                      lng={hotel?.address?.map?.lng}
                      text="My Marker"
                    />
                    <map name=""></map>
                  </GoogleMapReact>
                </div>
              </>
            ) : (
              <>
                <p className="text-center">Check Your Interne Connection</p>
              </>
            )}
          </>
        )}
      </Container>
    </Main>
  );
};

export default HotelDetails;
