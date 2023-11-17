// import { useParams } from "react-router-dom";
import Container from "../../components/ui/container";
import Main from "../../layout/main";
import {
  FaUserAlt,
  FaLock,
  FaBath,
  FaCheckCircle,
  FaBed,
  FaCheck,
  FaBus,
} from "react-icons/fa";
import {AiFillCar} from "react-icons/ai";
import {MdPool} from "react-icons/md";
import {CgGym} from "react-icons/cg";
import React from "react";
import {useAppSelector} from "../../redux/hooks";
import Button from "../../components/ui/button";
import {useGetRoomsByIdsQuery} from "../../api/private-api";
import SetTitle from "../../components/set-title";
import {usePostPaymentOrderMutation} from "../../api/public-api";
import toastError from "../../utils/toast-error";
import {BeatSpinner} from "../../components/spinner";

const Payment: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const reserveData = useAppSelector((state) => state.reserve);
  const roomIds = reserveData.map((room) => room.roomId);

  let {data: rooms, isLoading} = useGetRoomsByIdsQuery(roomIds);
  rooms = rooms?.map((room: any) => {
    const reserve = reserveData.find((r) => r.roomId === room._id);

    if (reserve) {
      const {
        _id,
        title,
        roomInfo: {regularPrice, discountedPrice},
      } = room;

      return {
        _id,
        title,
        thumbnails: room.thumbnails,
        price: regularPrice,
        discountedPrice,
        checkIn: reserve.checkIn,
        checkOut: reserve.checkOut,
        adult: reserve.adult,
        children: reserve.children,
      };
    }
  });

  const totalPrice = rooms?.reduce((total: any, room: any) => {
    if (room.discountedPrice) total += room.discountedPrice;
    return total;
  }, 0);
  const originalPrice = rooms?.reduce((total: any, room: any) => {
    if (room.price) total += room.price;
    return total;
  }, 0);

  const savings: number = originalPrice - totalPrice;

  const [postPaymentOrder, {isLoading: payIsLoading}] =
    usePostPaymentOrderMutation();

  const handlePayment = async () => {
    postPaymentOrder(reserveData)
      .unwrap()
      .then((url: string) => {
        window.location.href = url;
      })
      .catch(({data}: {data: any}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };
  return (
    <Main>
      <SetTitle title={`Pay now`} />
      <Container className="px-8">
        <div className="flex flex-col-reverse lg:flex-row justify-center py-2 items-start gap-4 mx-auto">
          <div className="w-full">
            <div className="block p-6 bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-800 dark:hover:bg-secondary-700">
              <div className="flex items-center gap-4">
                <FaUserAlt></FaUserAlt>
                <h5 className="">Step 1: Your details</h5>
              </div>
              <hr className="mt-1 border" />
              <p className=" py-4 ">
                <small>
                  Please tell us the name of the guest staying at the hotel as
                  it appears on the ID that they’ll present at check-in. If the
                  guest has more than one last name, please enter them all.
                </small>
              </p>
              <div>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    defaultValue={user.name}
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    defaultValue={user.email}
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    defaultValue={user.phone}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="block p-6 my-4 bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-800 dark:hover:bg-secondary-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p>
                    <FaBed></FaBed>
                  </p>
                  <h5 className="">Step 2: Property details</h5>
                </div>
              </div>
              <hr className="mt-1 border" />
              <h6 className="py-4 flex items-center gap-4 ">
                Property highlights
              </h6>
              <div className="grid pb-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2 items-center">
                <p className="flex gap2 items-center">
                  <AiFillCar />
                  Free parking
                </p>
                <p className="flex gap2 items-center">
                  <MdPool />
                  Pool
                </p>
                <p className="flex gap2 items-center">
                  <FaBus />
                  Airport transfer
                </p>
                <p className="flex gap2 items-center">
                  <FaBath />
                  Bathtub
                </p>
                <p className="flex gap2 items-center">
                  <CgGym />
                  Gym
                </p>
              </div>
              <hr />
              <p className="font-medium py-2">Facilities</p>
              <ul>
                <li className="flex gap-2 items-center">facility one</li>
                <li className="flex gap-2 items-center">
                  <FaCheck />
                  facility two
                </li>
              </ul>
            </div>

            <div className="block p-6 my-4 bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-800 dark:hover:bg-secondary-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaLock></FaLock>
                  <h5 className="">Step 3: Payment details</h5>
                </div>
                <p>Your booking is safe and secure</p>
              </div>
              <hr className="mt-1 border" />
              <p className="py-4 flex items-center gap-4 ">
                <FaCheckCircle></FaCheckCircle> We never charge any card fees
              </p>
              <div className="">
                <div className="">
                  <h4 className="py-2">Your Price Summary</h4>
                  <div className="flex justify-between items-center">
                    <p>Original Price:</p>
                    <p>BDT {originalPrice}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Bonus Savings:</p>
                    <p>BDT -{savings.toFixed(2)}</p>
                  </div>
                  <p>
                    <small>
                      You are getting reduce rate because this property is
                      offering a discount
                    </small>
                    <hr />
                  </p>
                  <div className="flex justify-between items-center  pt-4">
                    <Button
                      isDisabled={payIsLoading}
                      size="xl"
                      className="w-52"
                      onClick={handlePayment}>
                      {payIsLoading ? <BeatSpinner /> : " Pay Now"}
                    </Button>
                    <div>
                      <p className="font-medium text-red-600 line-through">
                        BDT {originalPrice}
                      </p>
                      <p className="text-3xl font-semibold">
                        {" "}
                        BDT {totalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              rooms?.map((room: any) => (
                <div
                  key={room._id}
                  className="max-w-sm h-full mb-4 bg-secondary-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative">
                    <img
                      className="rounded-lg border-2 p-2 border-white"
                      src={room.thumbnails[0]}
                      alt={room.title}
                    />
                    <button className="rounded-full absolute top-0 right-0 bg-secondary-200 block ml-auto px-2">
                      X
                    </button>
                  </div>
                  <div className="p-3">
                    <h6 className="font-bold">{room.title}</h6>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold">Price</p>
                      <p className="text-base">
                        <del>{room.price}</del> <b>{room.discountedPrice}</b>
                      </p>
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <div className="flex justify-between items-center">
                      <p className="text-base">Check In</p>
                      <b className="text-base">{room.checkIn}</b>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base">Check out</p>
                      <b className="text-base">{room.checkOut}</b>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base">Adult</p>
                      <b className="text-base">{room.adult}</b>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-base">Child</p>
                      <b className="text-base">{room.children}</b>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Payment;
