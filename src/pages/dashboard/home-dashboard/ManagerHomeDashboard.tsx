import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useGetManagerInfoQuery } from "../../../api/manager-api";

const ManagerHomeDashboard = () => {
  const [stats, setStats] = useState({
    hotels: 1,
    rooms: 5,
    bookings: 15,
    customers: 8,
  });

  useEffect(() => {
    // Fetch data from your API endpoints
    // Replace the following with actual API calls

    const fetchDashboardStats = async () => {
      try {
        const hotelsResponse = await fetch("/api/manager/hotels");
        const roomsResponse = await fetch("/api/manager/rooms");
        const bookingsResponse = await fetch("/api/manager/bookings");
        const customersResponse = await fetch("/api/manager/customers");

        const hotels = await hotelsResponse.json();
        const rooms = await roomsResponse.json();
        const bookings = await bookingsResponse.json();
        const customers = await customersResponse.json();

        setStats({
          hotels: hotels.count,
          rooms: rooms.count,
          bookings: bookings.count,
          customers: customers.count,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats", error);
      }
    };

    fetchDashboardStats();
  }, []);

  const { data: managerStat } = useGetManagerInfoQuery(undefined);
  console.log(managerStat);

  const data = {
    labels: ["Hotels", "Rooms", "Bookings", "Customers"],
    datasets: [
      {
        label: "Dashboard Stats",
        backgroundColor: [
          "rgba(255,99,132,0.4)",
          "rgba(54,162,235,0.4)",
          "rgba(255,206,86,0.4)",
          "rgba(75,192,192,0.4)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
        ],
        hoverBorderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
        ],
        data: [
          stats.hotels,
          managerStat?.rooms || 0,
          managerStat?.totalBooking || 0,
          managerStat?.totalCustomer || 0,
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1 className="text-center mb-4">Manager Dashboard</h1>
      <div className="mt-4 border p-4 rounded-lg shadow-lg">
        {/* <h3 className="text-xl text-center my-4 font-semibold">
            Admin Dashboard
          </h3> */}
        <div className="md:grid grid-cols-4 gap-4">
          <div>
            <h4 className="text-lg font-semibold">Total Hotels</h4>
            {/* Assume you have access to totalRooms for the admin */}
            <p className="text-2xl font-bold text-primary-500">1</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Total Rooms</h4>
            {/* Assume you have access to totalUsers for the admin */}
            <p className="text-2xl font-bold text-primary-500">
              {managerStat?.rooms}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Total Booking</h4>
            {/* Assume you have access to totalUsers for the admin */}
            <p className="text-2xl font-bold text-primary-500">
              {managerStat?.totalBooking}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Total Customers</h4>
            {/* Assume you have access to totalUsers for the admin */}
            <p className="text-2xl font-bold text-primary-500">
              {managerStat?.totalCustomer}
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* <h2>Dashboard Stats</h2> */}
        <Bar data={data} options={options} />
        <div>
          <p className="text-center text-primary-500 text-base underline font-semibold">
            Manager's Needed Stats in Bar Chart
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagerHomeDashboard;
