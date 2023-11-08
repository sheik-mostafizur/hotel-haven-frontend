import React, {useState} from "react";
import {HashSpinner} from "../../../../components/spinner";
import HotelCard from "./HotelCard";
import {useGetHotelsAdminQuery} from "../../../../api/admin-api";

const Hotels: React.FC = () => {
  const {data: hotels, isLoading} = useGetHotelsAdminQuery(undefined);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // 'all' is the default option

  // Filter the hotels based on the search text and approval status
  const filteredHotels = hotels
    ? hotels.filter((hotel: any) => {
        const isNameMatch = hotel.name
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const isStatusMatch =
          filterStatus === "all" || hotel.status === filterStatus;
        return isNameMatch && isStatusMatch;
      })
    : [];

  return (
    <>
      <div className="pb-4">
        <h2 className="text-center">Our Hotels</h2>
      </div>
      <div className="flex justify-between">
        <div className="mb-4">
          <label>Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-2 border rounded-md">
            <option value="all">All</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
            <option value="PENDING">Pending</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Search by Name:</label>
          <input
            type="text"
            placeholder="Search by name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
        </div>
      </div>
      {isLoading ? (
        <HashSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
          {filteredHotels.map((hotel: any) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      )}
    </>
  );
};

export default Hotels;
