import { useGetBookingHistoryQuery } from "../../../../api/private-api";
import { useGetHotelsQuery } from "../../../../api/public-api";
import SetTitle from "../../../../components/set-title";
import Container from "../../../../components/ui/container";
import Modal from "../../../../components/ui/modal";

const BookingHistory = () => {
  const { data } = useGetBookingHistoryQuery(undefined);
  const { data: hotelData } = useGetHotelsQuery(undefined);

  const getLocationName = (hotelId: any) => {
    const hotel = hotelData?.data.find((h: any) => h._id === hotelId);
    return hotel ? hotel?.address.location : "Unknown Location";
  };

  return (
    <Container>
      <SetTitle title={`Booking History | Dashboard`} />
      <h1>Booking History</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Hotel name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Room(s)
              </th>
              <th scope="col" className="px-6 py-3">
                Number of Guests
              </th>
              <th scope="col" className="px-6 py-3">
                Staying Duration
              </th>
              <th scope="col" className="px-6 py-3">
                Payment History
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((bookingHistory: any, index: number) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {bookingHistory?.hotelName}
                </td>
                <td className="px-6 py-4">
                  {bookingHistory?.hotelId && (
                    <span>{getLocationName(bookingHistory?.hotelId)}</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {bookingHistory?.rooms?.map((room: any, index: number) => (
                    <span key={index}>{room?.roomId}</span>
                  ))}
                </td>
                <td className="px-6 py-4">
                  {bookingHistory?.rooms?.map((room: any, index: number) => (
                    <span key={index}>
                      {room?.adult} Adults, {room?.children} Children
                    </span>
                  ))}
                </td>
                {/* <td className="px-6 py-4">
                  {bookingHistory?.rooms?.map((room: any, index: number) => {
                    const checkInDate = new Date(room?.checkIn);
                    const checkOutDate = new Date(room?.checkOut);

                    // Format date and time
                    const formattedCheckIn = `${checkInDate.toLocaleDateString()} ${checkInDate.toLocaleTimeString()}`;
                    const formattedCheckOut = `${checkOutDate.toLocaleDateString()} ${checkOutDate.toLocaleTimeString()}`;

                    // Calculate the difference in days
                    const timeDifference =
                      checkOutDate.getTime() - checkInDate.getTime();
                    const daysDifference = Math.ceil(
                      timeDifference / (1000 * 3600 * 24)
                    );

                    return (
                      <span key={index}>
                        {formattedCheckIn} to {formattedCheckOut} (
                        {daysDifference} days)
                      </span>
                    );
                  })}
                </td> */}
                <td className="px-6 py-4">
                  {bookingHistory?.rooms?.map((room: any, index: number) => {
                    const checkInDate = new Date(room?.checkIn);
                    const checkOutDate = new Date(room?.checkOut);

                    // Format date
                    const formattedCheckIn = `${checkInDate.getFullYear()}-${(
                      checkInDate.getMonth() + 1
                    )
                      .toString()
                      .padStart(2, "0")}-${checkInDate
                      .getDate()
                      .toString()
                      .padStart(2, "0")}`;
                    const formattedCheckOut = `${checkOutDate.getFullYear()}-${(
                      checkOutDate.getMonth() + 1
                    )
                      .toString()
                      .padStart(2, "0")}-${checkOutDate
                      .getDate()
                      .toString()
                      .padStart(2, "0")}`;

                    // Calculate the difference in days
                    const timeDifference =
                      checkOutDate.getTime() - checkInDate.getTime();
                    const daysDifference = Math.ceil(
                      timeDifference / (1000 * 3600 * 24)
                    );

                    return (
                      <span key={index}>
                        {formattedCheckIn} to {formattedCheckOut} (
                        {daysDifference} days)
                      </span>
                    );
                  })}
                </td>

                <td className="px-6 py-4">
                  <Modal
                    title={"See Payment Details"}
                    button={{
                      label: "Payment Details",
                      className: "block ml-auto",
                    }}
                  >
                    <div>
                      <p className="font-medium text-primary-700">
                        Transaction ID: {bookingHistory?.transactionId}
                      </p>
                      <p className="font-medium text-primary-700">
                        Payment Method: {bookingHistory?.cardType}
                      </p>
                      <p className="font-medium text-primary-700">
                        Payment Status: {bookingHistory?.status}
                      </p>
                      <p className="font-medium text-primary-700">
                        Amount: {bookingHistory?.totalAmount} BDt
                      </p>
                    </div>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default BookingHistory;
