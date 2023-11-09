import React, { useState } from "react";
import Container from "../../components/ui/container";
import AllHotelCard from "./AllHotelCard";
import Main from "../../layout/main";
import { useGetHotelsQuery } from "../../api/public-api";
import { HashSpinner } from "../../components/spinner";
import { useAppSelector } from "../../redux/hooks";

interface Hotel {
  _id: string;
  name: string;
  address: {
    location: string;
  };
  description: string;
  photoURL: string;
}

const Hotel: React.FC = () => {
  const query = useAppSelector((state) => state.hotelFilter);
  const { data: hotels, isLoading } = useGetHotelsQuery(query);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");

  // Extract unique locations from hotels data
  const uniqueLocations = Array.from(
    new Set(hotels?.map((hotel) => hotel.address.location))
  );

  const filteredHotels = hotels?.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter === "" || hotel.address.location === locationFilter)
  );

  return (
    <Main>
      <Container>
        {isLoading ? (
          <HashSpinner />
        ) : (
          <>
            <h1 className="text-center">All Hotels</h1>
            <div className="md:flex">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col">
                  <label htmlFor="search">Search by</label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-secondary-200 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="location">Filter by</label>
                  <select
                    id="location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="p-2 border border-secondary-200 rounded-md"
                  >
                    <option value="">All Locations</option>
                    {uniqueLocations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 my-4 justify-center items-center gap-4 md:gap-6 mx-auto">
                {filteredHotels &&
                  filteredHotels.map((hotel: Hotel) => (
                    <AllHotelCard key={hotel._id} {...hotel} />
                  ))}
              </div>
            </div>
          </>
        )}
      </Container>
    </Main>
  );
};

export default Hotel;
