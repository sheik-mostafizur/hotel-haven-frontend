import {FaBed, FaCheck, FaEye} from "react-icons/fa";
import {GiResize} from "react-icons/gi";
import Button from "../../../components/ui/button";
import {Link} from "react-router-dom";
import {BeatSpinner} from "../../../components/spinner";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {Tooltip} from "react-tooltip";
import {
  useDeleteWishlistByIdMutation,
  useGetWishlistQuery,
  usePostWishlistMutation,
} from "../../../api/private-api";
import toastSuccess from "../../../utils/toast-success";
import toastError from "../../../utils/toast-error";
import {Swiper, SwiperSlide} from "swiper/react";
import {FaRegMoneyBillAlt} from "react-icons/fa";

// Import Swiper styles
// import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation} from "swiper/modules";

interface Room {
  room: any;
}

const CardRoom: React.FC<Room> = ({room}) => {
  const {data: wishlist} = useGetWishlistQuery(undefined);
  const [postWishlist, {isLoading: postWishLoading}] =
    usePostWishlistMutation();
  const [deleteWishlistById, {isLoading: delWishLoading}] =
    useDeleteWishlistByIdMutation();

  const handleWishlist = (_id: any) => {
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

  const handleDeleteWishlist = (_id: any) => {
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
    <div>
      <div className=" bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-800">
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
          className="mySwiper">
          <SwiperSlide>
            <img className="w-full h-72" src={room?.thumbnails[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-72" src={room?.thumbnails[1]} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-72" src={room?.thumbnails[2]} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="p-4">
          <h5 className="my-2 ">{room.title}</h5>

          <div className="py-1 ">
            <strong>Facilities:</strong>
            <>
              {room.facilities.map((facility: any, index: number) => (
                <li key={index}>{facility}</li>
              ))}
            </>
          </div>
          <div className="mb-3">
            <ul>
              <li className="flex gap-4 items-center">
                <span>
                  <FaRegMoneyBillAlt />
                </span>
                <span className="line-through">
                  {room?.roomInfo.regularPrice} BDT
                </span>
                <span> {room?.roomInfo.discountedPrice} BDT</span>
              </li>
              <li></li>
              <li className="flex gap-2 items-center">
                <GiResize></GiResize>
                {room?.roomInfo.roomSize}
              </li>
              <li className="flex gap-2 items-center">
                <FaBed></FaBed>
                {room?.roomInfo.bedType}
              </li>
              <li className="flex gap-2 items-center">
                <FaEye></FaEye>
                {room?.roomInfo.view}
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck></FaCheck>
                {room?.roomInfo.additionalInfo}
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <Link to={`/payment/${room._id}`}>
              <Button>Reserve Now</Button>
            </Link>
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
