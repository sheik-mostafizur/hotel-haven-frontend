import {Link, useParams} from "react-router-dom";
import Container from "../../components/ui/container";
import Main from "../../layout/main";
import {FaUserAlt, FaLock, FaCheckCircle} from "react-icons/fa";
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import React from "react";
import {useAppSelector} from "../../redux/hooks";
import Button from "../../components/ui/button";

interface IFormInputs {
  fullName: string;
  Email: string;
  mobile: number;
}

const Payment: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  const {_id} = useParams();

  const {handleSubmit, control, reset} = useForm<IFormInputs>({});
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  const handelPayment = () => {
    const order = {
      ...user,
      roomId: _id,
    };
    console.log(order);
  };
  const amount = 1222;

  return (
    <Main>
      <Container className="px-8">
        <div className="w-full">
          <h3 className="">Room Title</h3>
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
                <div className="flex items-center gap-4">
                  <FaLock></FaLock>
                  <h5 className="">Step 2: Payment details</h5>
                </div>
                <p>Your booking is safe and secure</p>
              </div>
              <hr className="mt-1 border" />
              <p className="py-4 flex items-center gap-4 ">
                <FaCheckCircle></FaCheckCircle> We never charge any card fees
              </p>
              <Button onClick={() => handelPayment()}>Pay Now</Button>
            </div>
          </div>
          {/* Room Details */}
          <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Payment;
