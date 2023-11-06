import {Link, useParams} from "react-router-dom";
import Main from "../../../layout/main";
import {HashSpinner} from "../../../components/spinner";
import Container from "../../../components/ui/container";
import Button from "../../../components/ui/button";
import GoogleMapReact from "google-map-react";
import {FaBed, FaEye, FaCheck} from "react-icons/fa6";
import {GiResize} from "react-icons/gi";
import {useGetHotelByIdQuery} from "../../../api/public-api";
import {useAppSelector} from "../../../redux/hooks";
import React from "react";
import {Tooltip} from "react-tooltip";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {
  useDeleteWishlistByIdMutation,
  useGetWishlistQuery,
  usePostWishlistMutation,
} from "../../../api/private-api";
import toastError from "../../../utils/toast-error";
import toastSuccess from "../../../utils/toast-success";

const AnyReactComponent = ({text}) => <div>{text}</div>;
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

  const {data: wishlist} = useGetWishlistQuery(undefined);
  const [postWishlist] = usePostWishlistMutation();
  const [deleteWishlistById] = useDeleteWishlistByIdMutation();

  const {hotel} = viewHotels || [];

  const defaultProps = {
    center: {
      lat: hotel?.address?.map?.lat as number,
      lng: hotel?.address?.map?.lng as number,
    },
    zoom: 11,
  };

  const handleWishlist = (_id) => {
    postWishlist({roomId: _id})
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };

  const handleDeleteWishlist = (_id) => {
    deleteWishlistById(_id)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
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
                    viewHotels?.rooms.map((room: any) => (
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
                              <ul>
                                <li>
                                  Regular price:{" "}
                                  {viewHotels?.rooms[0].roomInfo.regularPrice}{" "}
                                  BDT
                                </li>
                                <li>
                                  Discount price:{" "}
                                  {
                                    viewHotels?.rooms[0].roomInfo
                                      .discountedPrice
                                  }{" "}
                                  BDT
                                </li>
                                <li className="flex gap-2 items-center">
                                  <GiResize></GiResize>
                                  {viewHotels?.rooms[0].roomInfo.roomSize}
                                </li>
                                <li className="flex gap-2 items-center">
                                  <FaBed></FaBed>
                                  {viewHotels?.rooms[0].roomInfo.bedType}
                                </li>
                                <li className="flex gap-2 items-center">
                                  <FaEye></FaEye>
                                  {viewHotels?.rooms[0].roomInfo.view}
                                </li>
                                <li className="flex gap-2 items-center">
                                  <FaCheck></FaCheck>
                                  {viewHotels?.rooms[0].roomInfo.additionalInfo}
                                </li>
                              </ul>
                            </div>
                            <div className="flex items-center justify-between">
                              <Link to={`/payment/${room._id}`}>
                                <Button>Reserve Now</Button>
                              </Link>
                              {wishlist?.some(
                                (item) => item.roomId === room._id
                              ) ? (
                                <>
                                  <AiFillHeart
                                    onClick={() =>
                                      handleDeleteWishlist(room._id)
                                    }
                                    data-tooltip-id={`saved_wishlist`}
                                    data-tooltip-content="Already saved wishlist"
                                    data-tooltip-place="top"
                                    className="text-red-500 text-2xl cursor-pointer focus:outline-none"
                                  />
                                  <Tooltip
                                    className="border-none"
                                    id={`saved_wishlist`}
                                  />
                                </>
                              ) : (
                                <>
                                  <AiOutlineHeart
                                    onClick={() => handleWishlist(room._id)}
                                    data-tooltip-id={`wishlist`}
                                    data-tooltip-content="Save to wishlist"
                                    data-tooltip-place="top"
                                    className="text-secondary-500 text-2xl cursor-pointer focus:outline-none"
                                  />
                                  <Tooltip
                                    className="border-none"
                                    id={`wishlist`}
                                  />
                                </>
                              )}
                            </div>
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
