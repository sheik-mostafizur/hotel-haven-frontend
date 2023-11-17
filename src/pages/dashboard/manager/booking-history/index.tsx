import {useGetManagerBookingHistoryQuery} from "../../../../api/manager-api";
import Container from "../../../../components/ui/container";
import Modal from "../../../../components/ui/modal";

interface BookingType {
  readonly _id: string;
  readonly transactionId: string;
  email: string;
  phoneNumber: string;
  hotelId: string;
  rooms: {
    roomId: string;
    checkIn: string;
    checkOut: string;
    adult: number;
    children: number;
    _id: string;
  }[];
  cardType: string;
  status: string;
  totalAmount: number;
  __v: number;
}

const BookingHistory = () => {
  const {data} = useGetManagerBookingHistoryQuery(undefined);
  console.log(data);
  return (
    <Container className="">
      <h1 className="text-center mb-8">Booking and Payment History</h1>
      {data?.map((booking: BookingType) => (
        <div className="my-4" key={booking._id}>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-secondary-500 dark:text-secondary-400">
              <thead className="text-xs text-secondary-700 uppercase bg-secondary-50 dark:bg-secondary-700 dark:text-secondary-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Room ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Adult
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Children
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CheckIn
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CheckOut
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {booking.rooms?.map((room, index) => (
                  <tr className="odd:bg-white odd:dark:bg-secondary-900 even:bg-secondary-50 even:dark:bg-secondary-800 border-b dark:border-secondary-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-secondary-900 whitespace-nowrap dark:text-white">
                      {room.roomId}
                    </th>
                    <td className="px-6 py-4">{room.adult}</td>
                    <td className="px-6 py-4">{room.children}</td>
                    <td className="px-6 py-4">{room.checkIn}</td>
                    <td className="px-6 py-4">{room.checkOut}</td>
                    {index == 0 && (
                      <td rowSpan={++index + 1} className="px-6 py-4">
                        <Modal
                          title="Payment Details"
                          button={{label: "Details", className: "scale-95"}}>
                          <p>
                            <b>Order ID: </b>
                            {booking._id}
                          </p>
                          <p>
                            <b>Transaction ID: </b>
                            {booking.transactionId}
                          </p>
                          <p>
                            <b>Card Type: </b>
                            {booking.cardType}
                          </p>
                          <p>
                            <b>Email: </b>
                            {booking.email}
                          </p>
                          <p>
                            <b>Number: </b>
                            {booking.phoneNumber}
                          </p>
                          <p>
                            <b>Total Amount: </b>
                            <span className="text-2xl font-semibold">
                              {booking.totalAmount}
                            </span>
                          </p>
                        </Modal>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default BookingHistory;
