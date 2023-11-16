import React from "react";
import Container from "../../../../components/ui/container";
import SetTitle from "../../../../components/set-title";

const BookingHistoryManager: React.FC = () => {
  return (
    <Container>
      <SetTitle title={`Booking History | Dashboard`} />
      <h2 className="text-center">Booking History</h2>
      <div className="relative overflow-x-auto my-6 shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Hotel Name
              </th>
              <th scope="col" className="px-6 py-3">
                Room title
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default BookingHistoryManager;
