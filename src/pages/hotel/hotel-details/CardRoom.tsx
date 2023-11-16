import { FaBed, FaCheck, FaChild, FaEye, FaPeopleArrows } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import Button from "../../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { BeatSpinner } from "../../../components/spinner";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import {
  useDeleteWishlistByIdMutation,
  useGetWishlistQuery,
  usePostWishlistMutation,
} from "../../../api/private-api";
import toastSuccess from "../../../utils/toast-success";
import toastError from "../../../utils/toast-error";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

// Import Swiper styles
// import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useConfirm, useWarning } from "../../../hooks";
import { setReserve } from "../../../redux/reserve-slice";

interface Room {
  room: any;
}

const CardRoom: React.FC<Room> = ({ room }) => {
  const navigate = useNavigate();
  const hotelFilter = useAppSelector((state) => state.hotelFilter);
  const user = useAppSelector((state) => state.auth.user);
  const reserve = useAppSelector((state) => state.reserve);
  const dispatch = useAppDispatch();

  const { data: wishlist } = useGetWishlistQuery(undefined);
  const [postWishlist, { isLoading: postWishLoading }] =
    usePostWishlistMutation();
  const [deleteWishlistById, { isLoading: delWishLoading }] =
    useDeleteWishlistByIdMutation();

  const handleWishlist = (_id: any) => {
    postWishlist({ roomId: _id })
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({ data }) => {
        const error = { message: data?.message };
        toastError(error);
      });
  };

  const handleDeleteWishlist = (_id: any) => {
    deleteWishlistById(_id)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({ data }) => {
        const error = { message: data?.message };
        toastError(error);
      });
  };

  const handleReserve = async () => {
    if (!hotelFilter.checkIn || !hotelFilter.checkOut) {
      return useWarning({
        title: "Please select checkIn and checkOut!",
      });
    }

    const isSameHotel = reserve.some((resv) => resv.hotelId !== room.hotelId);

    if (isSameHotel) return alert("must room will be a hotel");

    dispatch(
      setReserve({
        email: user.email,
        phoneNumber: user.phone,
        roomId: room._id,
        hotelId: room.hotelId,
        checkIn: hotelFilter.checkIn,
        checkOut: hotelFilter.checkOut,
        adult: hotelFilter.adult,
        children: hotelFilter.children,
      })
    );
    const isConfirm = await useConfirm({
      config: { icon: "success", buttons: ["Add more", "Pay now"] },
      title: "To proceed with your reservation please pay now.",
    });

    if (isConfirm) {
      navigate(`/payment`);
    }
  };

  return (
    <div>
      <div className=" bg-white border w-80 lg:w-full border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-800">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              // style={{ width: "100%" }}
              className="h-72"
              src={room?.thumbnails[0]}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              // style={{ width: "100%" }}
              className="h-72"
              src={room?.thumbnails[1]}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              // style={{ width: "100%" }}
              className="h-72"
              src={room?.thumbnails[2]}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-4">
          <h5 className="my-2 h-12">{room.title}</h5>

          <div className="py-1 h-44">
            <strong>Facilities:</strong>
            <>
              {room.facilities.map((facility: any, index: number) => (
                <li key={index} className="h-10">
                  {facility}
                </li>
              ))}
            </>
          </div>
          <div className="mb-3 h-64">
            <ul>
              <li className="flex gap-4 items-center h-8">
                <span>
                  <FaRegMoneyBillAlt />
                </span>
                <span className="line-through">
                  {room?.roomInfo.regularPrice} BDT
                </span>
                <span className="text-red-500">
                  {" "}
                  {room?.roomInfo.discountedPrice} BDT
                </span>
              </li>
              <li className="flex gap-2 items-center h-8">
                <GiResize></GiResize>
                {room?.roomInfo.roomSize}
              </li>
              <li className="flex gap-2 h-8 items-center">
                <FaBed></FaBed>
                {room?.roomInfo.bedType}
              </li>
              <li className="flex gap-2 items-center h-8">
                <FaPeopleArrows /> <span>Adult: {room.capacity.adult}</span>
              </li>
              <li className="flex gap-2 items-center h-8">
                <FaChild />
                <span>Child: {room.capacity.children}</span>
              </li>
              <li className="flex gap-2 items-center h-8">
                <FaEye></FaEye>
                {room?.roomInfo.view}
              </li>
              <li className="flex gap-2 items-center h-16">
                <FaCheck></FaCheck>
                {room?.roomInfo.additionalInfo}
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between">
            {reserve.some((r) => r.roomId == room._id) ? (
              <Button onClick={() => navigate(`/payment`)}>Pay</Button>
            ) : (
              <Button
                onClick={handleReserve}
                isDisabled={room.availability.isBlocked}
              >
                {room.availability.isBlocked ? "Already Booked" : "Reserve"}
              </Button>
            )}

            {wishlist?.some((item: any) => item.roomId === room._id) ? (
              <>
                {delWishLoading ? (
                  <BeatSpinner color="#ef4444" />
                ) : (
                  <>
                    <AiFillHeart
                      onClick={() => handleDeleteWishlist(room._id)}
                      data-tooltip-id={`saved_wishlist`}
                      data-tooltip-content="Already saved wishlist"
                      data-tooltip-place="top"
                      className="text-red-500 text-2xl cursor-pointer focus:outline-none"
                    />
                    <Tooltip className="border-none" id={`saved_wishlist`} />
                  </>
                )}
              </>
            ) : (
              <>
                {postWishLoading ? (
                  <BeatSpinner color="#ef4444" />
                ) : (
                  <>
                    <AiOutlineHeart
                      onClick={() => handleWishlist(room._id)}
                      data-tooltip-id={`wishlist`}
                      data-tooltip-content="Save to wishlist"
                      data-tooltip-place="top"
                      className="text-secondary-500 text-2xl cursor-pointer focus:outline-none"
                    />
                    <Tooltip className="border-none" id={`wishlist`} />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRoom;
