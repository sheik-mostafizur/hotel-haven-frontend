import {useParams} from "react-router-dom";
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
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import React from "react";
import {useAppSelector} from "../../redux/hooks";
import Button from "../../components/ui/button";
import {useGetRoomDetailsQuery} from "../../api/private-api";
import SetTitle from "../../components/set-title";

interface IFormInputs {
  fullName: string;
  Email: string;
  mobile: number;
}

const Payment: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const {_id} = useParams();
  const {data} = useGetRoomDetailsQuery(_id);

  // const { hotel, room } = data;
  // console.log(hotelFilter);

  // const { title, roomInfo, facilities, capacity, availability, thumbnails } =
  //   data?.room;

  // const { address } = data?.hotel;
  // console.log(data?.room?.roomInfo?.discountedPrice);
  const {handleSubmit, control} = useForm<IFormInputs>({});
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
// const token = ''
  const handelPayment = () => {
    fetch('http://localhost:3000/payment/order',{
      method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ3VzdG9tZXIiLCJlbWFpbCI6ImN1c3RvbWVyQGdtYWlsLmNvbSIsImdlbmRlciI6Ik1BTEUiLCJhZ2UiOjIxLCJpYXQiOjE2OTk4MzY1NDJ9.luGYQo6haAbRIbrvf8L7spcCGDXCSpMsLcmah6QRBXY`
  },
  body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(results=> 
     {
      window.location.replace(results.url)
      console.log(results)
     }
      )
    
  };

  const amount = 1222;

  return (
    <Main>
      <SetTitle title={`Pay now`} />
      <Container className="px-8">
        <div className="w-full">
          <h3 className="">{data?.room?.title}</h3>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center py-2 items-start gap-4 mx-auto">
          <div className="w-full">
            {/* <div className=" p-6 flex items-center gap-4 bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-800 ">
              <span className="bg-primary-500 p-5 rounded-2xl">
                <FaMoon></FaMoon>
              </span>
              <div>
                <h6 className="">Collect 4 stamps with this stay</h6>
                <p>10 stamps get you 1 reward night.</p>
              </div>
            </div> */}
            {/* step 1 */}
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fullName">Name</label>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => (
                    <input {...field} value={`${user.name}`} />
                  )}
                />
                <br />
                <label htmlFor="Email">Email</label>
                <small>Your confirmation email goes here</small>
                <Controller
                  name="Email"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => (
                    <input {...field} value={`${user.email}`} />
                  )}
                />
                <br />
                <label htmlFor="mobile">Mobile</label>
                <small className="">
                  We’ll only contact you in an emergency
                </small>
                <Controller
                  name="mobile"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => (
                    <input {...field} value={`${user.phone}`} />
                  )}
                />
                <label htmlFor="amount">Mobile</label>

                <Controller
                  name="mobile"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => (
                    <input {...field} value={amount} type="number" />
                  )}
                />
              </form>
            </div>
            {/* step 2 Payment Details*/}
            <div className="block p-6 my-4 bg-white border border-secondary-200 rounded-lg shadow hover:bg-secondary-100 dark:bg-secondary-800 dark:border-secondary-800 dark:hover:bg-secondary-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaLock></FaLock>
                  <h5 className="">Step 2: Payment details</h5>
                </div>
                <p>Your booking is safe and secure</p>
              </div>
              <hr className="mt-1 border" />
              <p className="py-4 flex items-center gap-4 ">
                <FaCheckCircle></FaCheckCircle> We never charge any card fees
              </p>
              <Button onClick={handelPayment}>Pay Now</Button>
            </div>
            {/* step 3 details */}
            <div className="block p-6 my-4 bg-white border border-secondary-200 rounded-lg shadow hover:bg-secondary-100 dark:bg-secondary-800 dark:border-secondary-800 dark:hover:bg-secondary-700">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <p>
                    <FaBed></FaBed>
                  </p>
                  <h5 className="">Step 3: Property details</h5>
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
                {data?.room?.facilities &&
                  data?.room?.facilities.map((f: string) => (
                    <li key={f} className="flex gap-2 items-center">
                      <FaCheck />
                      {f}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {/* Room Details */}
          <div className="max-w-sm h-full mb-4 lg:sticky lg:top-0 bg-secondary-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-lg border-2 p-2 border-white"
                src={data?.room?.thumbnails[0]}
                alt="Room image"
              />
            </div>
            <div className="p-5 mb-4">
              <h6>{data?.room?.title}</h6>
              <p>
                <small>{data?.hotel?.address?.location}</small>
              </p>
            </div>
            {/* <div className="p-5 mb-4 mx-2 bg-white rounded-lg border-2">
              <div className="flex justify-between items-center">
                <p> CheckIn:</p>
                <p>date</p>
              </div>
              <div className="flex justify-between items-center">
                <p>CheckOut:</p>
                <p>date</p>
              </div>
            </div> */}
            {/* <div className="p-5 bg-white">
              <div className="flex justify-between items-center">
                <p>date</p>
                <p>{data?.room?.roomInfo?.discountedPrice} BDT</p>
              </div>
              <div className="flex justify-between items-center">
                <p>tax:</p>
                <p>5%</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Total Price:</p>
                <p>130 BDT</p>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Payment;
