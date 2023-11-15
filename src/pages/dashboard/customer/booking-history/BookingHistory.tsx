import SetTitle from "../../../../components/set-title";
import Button from "../../../../components/ui/button";
import Container from "../../../../components/ui/container";
import Modal from "../../../../components/ui/modal";

const BookingHistory = () => {
  return (
    <Container>
      <SetTitle title={`Booking History | Dashboard`} />
      <h1>Booking History</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Booking ID
              </th>
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
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                vfdsf12JHGH
              </th>
              <td className="px-6 py-4">Test Hotel</td>
              <td className="px-6 py-4">Cox Bazar</td>
              <td className="px-6 py-4">`Demo Rooms`</td>
              <td className="px-6 py-4">2 Adults 1 Child</td>
              <td className="px-6 py-4">
                12-Oct-2023 to 14-Oct-2023 (3 Nights)
              </td>
              <td className="px-6 py-4">
                <Modal
                  title={"See Payment Details"}
                  button={{
                    label: "Payment Details",
                    className: "block ml-auto",
                  }}
                >
                  <p>Transaction id: ewrewtewtwet3535</p>
                  <p>Payment Method: BKash</p>
                  <p>Amount: 3000 BDt</p>
                </Modal>
              </td>
              {/* <td className="px-6 py-4">
                <Button size="sm">View Payment Details</Button>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default BookingHistory;
