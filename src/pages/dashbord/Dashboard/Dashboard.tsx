import {FaDollarSign} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className="p-10">
          <h5>Today's Data : </h5>
          <div className="flex gap-4">
            <div className="shadow-2xl  border p-10 flex gap-10  items-center ">
              <div>
                <p className="text-lg font-semibold  ">Payment amount :</p>
                <p className="font-semibold">$ 500.00 </p>
              </div>
              <div className="w-10 h-10 bg-red-600 rounded-full flex justify-center items-center text-white">
                <FaDollarSign />
              </div>
            </div>
            <div className="shadow-2xl  border p-10 flex gap-10  items-center ">
              <div>
                <p className="text-lg font-semibold  ">Payment Order :</p>
                <p className="font-semibold">$ 500.00 </p>
              </div>
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex justify-center items-center text-white">
                <FaDollarSign />
              </div>
            </div>
            <div className="shadow-2xl  border p-10 flex gap-10  items-center ">
              <div>
                <p className="text-lg font-semibold  ">Payment Customer :</p>
                <p className="font-semibold">$ 500.00 </p>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex justify-center items-center text-white">
                <FaDollarSign />
              </div>
            </div>
            <div className="shadow-2xl  border p-10 flex gap-10  items-center ">
              <div>
                <p className="text-lg font-semibold  ">Payment Proceed :</p>
                <p className="font-semibold">$ 500.00 </p>
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-full flex justify-center items-center text-white">
                <FaDollarSign />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-blue-700 border-b border-blue-400 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 bg-blue-700">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    Hotel name
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Transaction Type
                  </th>

                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Stauts
                  </th>
                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-primary-500 border-b border-blue-400">
                  <td className="px-6 py-4">12/12/2023</td>
                  <td className="px-6 py-4 bg-blue-500">Hotel-1</td>
                  <td className="px-6 py-4 ">Bkash</td>
                  <td className="px-6 py-4 bg-blue-500">Single Room</td>
                  <td className="px-6 py-4 ">Pending</td>
                  <td className="px-6 py-4 bg-blue-500">$299</td>
                  <td className="px-6 py-4 ">
                    <a
                      href="#"
                      className="font-medium text-white hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-primary-500 border-b border-blue-400">
                  <td className="px-6 py-4">12/12/2023</td>
                  <td className="px-6 py-4 bg-blue-500">Hotel-1</td>
                  <td className="px-6 py-4 ">Bkash</td>
                  <td className="px-6 py-4 bg-blue-500">Single Room</td>
                  <td className="px-6 py-4 ">Pending</td>
                  <td className="px-6 py-4 bg-blue-500">$299</td>
                  <td className="px-6 py-4 ">
                    <a
                      href="#"
                      className="font-medium text-white hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-primary-500 border-b border-blue-400">
                  <td className="px-6 py-4">12/12/2023</td>
                  <td className="px-6 py-4 bg-blue-500">Hotel-1</td>
                  <td className="px-6 py-4 ">Bkash</td>
                  <td className="px-6 py-4 bg-blue-500">Single Room</td>
                  <td className="px-6 py-4 ">Pending</td>
                  <td className="px-6 py-4 bg-blue-500">$299</td>
                  <td className="px-6 py-4 ">
                    <a
                      href="#"
                      className="font-medium text-white hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-primary-500 border-b border-blue-400">
                  <td className="px-6 py-4">12/12/2023</td>
                  <td className="px-6 py-4 bg-blue-500">Hotel-1</td>
                  <td className="px-6 py-4 ">Bkash</td>
                  <td className="px-6 py-4 bg-blue-500">Single Room</td>
                  <td className="px-6 py-4 ">Pending</td>
                  <td className="px-6 py-4 bg-blue-500">$299</td>
                  <td className="px-6 py-4 ">
                    <a
                      href="#"
                      className="font-medium text-white hover:underline">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
