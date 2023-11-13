import SetTitle from "../../../../components/set-title";
import Container from "../../../../components/ui/container";

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
                Hotel Image
              </th>
              <th scope="col" className="px-6 py-3">
                Hotel name
              </th>
              <th scope="col" className="px-6 py-3">
                Room
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
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                {/* <Button size="sm">View</Button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default BookingHistory;
