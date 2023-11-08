import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Chart from "chart.js/auto";

const ProfileDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const isAdmin = user.role === "ADMIN";
  const usersData = useAppSelector((state) => state.users); // Replace with actual user data from Redux
  const hotelsData = useAppSelector((state) => state.hotels); // Replace with actual hotel data from Redux

  // Reference to the canvas elements where the charts will be rendered
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

  useEffect(() => {
    if (isAdmin) {
      const userData = usersData || []; // Replace with your user data
      const userDataCount = {
        Customers: 100,
        Managers: 60,
        Admins: 5,
      };

      // Count the number of users in each category
      userData.forEach((user) => {
        if (user.role === "CUSTOMER") {
          userDataCount.Customers += 1;
        } else if (user.role === "MANAGER") {
          userDataCount.Managers += 1;
        } else if (user.role === "ADMIN") {
          userDataCount.Admins += 1;
        }
      });

      // Create the data for the pie chart
      const pieChartData = {
        labels: ["Customers", "Managers", "Admins"],
        datasets: [
          {
            data: [
              userDataCount.Customers,
              userDataCount.Managers,
              userDataCount.Admins,
            ],
            backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"], // Colors for the pie chart segments
          },
        ],
      };

      const pieChartConfig = {
        type: "pie",
        data: pieChartData,
      };

      // Destroy the existing pie chart (if any) before creating a new one
      const existingPieChart = pieChartRef.current?.__chart;
      if (existingPieChart) {
        existingPieChart.destroy();
      }

      // Create the pie chart
      new Chart(pieChartRef.current, pieChartConfig);

      // Count the number of hotels with different statuses
      const hotelDataCount = {
        APPROVED: 44,
        REJECTED: 3,
        PENDING: 2,
      };

      // Create the data for the bar chart
      const barChartData = {
        labels: ["APPROVED", "REJECTED", "PENDING"],
        datasets: [
          {
            label: "Hotel Status",
            data: [
              hotelDataCount.APPROVED,
              hotelDataCount.REJECTED,
              hotelDataCount.PENDING,
            ],
            backgroundColor: ["#4CAF50", "#F44336", "#FFC107"], // Colors for the bar chart bars
          },
        ],
      };

      const barChartConfig = {
        type: "bar",
        data: barChartData,
      };

      // Destroy the existing bar chart (if any) before creating a new one
      const existingBarChart = barChartRef.current?.__chart;
      if (existingBarChart) {
        existingBarChart.destroy();
      }

      // Create the bar chart
      new Chart(barChartRef.current, barChartConfig);
    }
  }, [isAdmin, usersData, hotelsData]);

  return (
    <div className="p-4 border-2 border-secondary-200 border-dashed rounded-lg dark:border-secondary-700">
      <h2>User Details</h2>
      <h3>Name: {user.name}</h3>
      <h5>Role: {user.role}</h5>
      <img width={100} src={user.photoURL} alt={user.name} />

      {isAdmin && (
        <div className="mt-4 border p-4 rounded-lg shadow-lg">
          <h3 className="text-xl text-center my-4 font-semibold">
            Admin Dashboard
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold">Total Rooms</h4>
              {/* Assume you have access to totalRooms for the admin */}
              <p className="text-2xl font-bold text-primary-500">49</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Total Users</h4>
              {/* Assume you have access to totalUsers for the admin */}
              <p className="text-2xl font-bold text-primary-500">165</p>
            </div>
          </div>
        </div>
      )}

      <div className="md:flex justify-around">
        <div className="text-center">
          <div className="mt-4 w-80">
            <canvas ref={pieChartRef} width={200} height={200}></canvas>
          </div>
          <p className="text-lg font-medium">Users Pie Chart</p>
        </div>

        <div className="text-center">
          <div className="mt-4 w-80">
            <canvas ref={barChartRef} width={200} height={200}></canvas>
          </div>
          <p className="text-lg font-medium">Hotel Status Bar Chart</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
