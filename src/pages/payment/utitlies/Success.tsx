import {Link, useParams} from "react-router-dom";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";
import {useGetPaymentSuccessOrderQuery} from "../../../api/public-api";
import Container from "../../../components/ui/container";
import OrderDownload from "./OrderDownload";
import SuccessSkeleton from "../../../components/skeleton/success-skeleton";

const Success = () => {
  const {transactionId} = useParams();
  const {data, isLoading} = useGetPaymentSuccessOrderQuery(transactionId);

  return (
    <Container>
      {isLoading ? (
        <SuccessSkeleton />
      ) : (
        <div className="bg-white py-4 md:py-8 px-4 md:px-8 mx-auto shadow md:shadow-lg rounded text-center max-w-lg">
          <h1 className=" text-green-500 mb-4">Payment Successful!</h1>
          <IoMdCheckmarkCircleOutline className="block text-4xl md:text-9xl mx-auto text-green-500 mb-4" />
          <p className="mb-4">
            Thank you for your payment. Your transaction was successful.
          </p>
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center justify-between">
              <p>Payment Type</p>
              <p className="font-semibold">{data?.cardType}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Status</p>
              <p className="font-semibold">{data?.status}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Email</p>
              <p className="font-semibold">{data?.email}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Mobile</p>
              <p className="font-semibold">{data?.phoneNumber}</p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p>Transaction Id</p>
              <p className="font-semibold">{data?.transactionId}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Amount paid</p>
              <p className="font-semibold text-2xl">{data?.totalAmount}.00</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <OrderDownload data={data} />
              <Link to={"/dashboard/bookingHistory"}>
                <button
                  type="button"
                  className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-700">
                  Close
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Success;
