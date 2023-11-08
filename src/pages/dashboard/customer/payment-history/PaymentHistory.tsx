import Container from "../../../../components/ui/container";

const PaymentHistory = () => {
  return (
    <Container>
      <h1>Payment History</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                RoomId
              </th>
              <th scope="col" className="px-6 py-3">
                UserId
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {/* <tbody>
                {wishlist?.map((item) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item._id}
                    </th>
                    <td className="px-6 py-4">{item.roomId}</td>
                    <td className="px-6 py-4">{item.userId}</td>
                    <td className="px-6 py-4">
                      <Button
                        size="sm"
                        onClick={() => handleDeleteWishlist(item._id)}>
                        remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody> */}
        </table>
      </div>
    </Container>
  );
};

export default PaymentHistory;
