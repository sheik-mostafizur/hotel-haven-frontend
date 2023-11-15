import React, {useState} from "react";
import Container from "../../components/ui/container";
import Main from "../../layout/main";
import {useGetHotelsQuery, useGetLocationsQuery} from "../../api/public-api";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import Pagination from "../../components/pagination";
import SetTitle from "../../components/set-title";
import {setHotelFilter} from "../../redux/hotel-filter-slice";
import {HotelCard, HotelCardSkeleton} from "../../components/ui/card";
import formatDateToYYYYMMDD from "../../utils/format-date-to-YYYYMMDD";

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
  const {data: locations} = useGetLocationsQuery(undefined);
  const dispatch = useAppDispatch();
  const filterQuery = useAppSelector((state) => state.hotelFilter);

  const {data, isLoading} = useGetHotelsQuery(filterQuery);
  const {data: hotels, totalPages, currentPage} = data || {};

  // TODO: waiting for logic
  const [searchTerm, setSearchTerm] = useState<string>("");

  const checkInMinDate = formatDateToYYYYMMDD();

  let currentCheckIn = new Date(filterQuery.checkIn);
  const day = currentCheckIn.getDate();
  currentCheckIn.setDate(day + 1);
  const checkOutMinDate = formatDateToYYYYMMDD(currentCheckIn);

  return (
    <Main>
      <SetTitle title="Our hotels" />
      <Container>
        <h1 className="text-center">All Hotels</h1>
        <div className="md:flex md:gap-4">
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
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-800 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="location"
                value={filterQuery.location}
                onChange={(e) =>
                  dispatch(
                    setHotelFilter({
                      ...filterQuery,
                      location: e.target.value,
                    })
                  )
                }>
                <option value="">ALL</option>
                {locations &&
                  locations.map((location: any) => (
                    <option key={location._id} value={location.location}>
                      {location.address}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="checkIn">Check In Date</label>
              <input
                id="checkIn"
                defaultValue={filterQuery.checkIn}
                type="date"
                min={checkInMinDate}
                onChange={(e) => {
                  dispatch(
                    setHotelFilter({
                      ...filterQuery,
                      checkIn: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <div>
              <label htmlFor="checkOut">Check Out Date</label>
              <input
                id="checkOut"
                defaultValue={filterQuery.checkOut}
                type="date"
                min={checkOutMinDate}
                onChange={(e) => {
                  dispatch(
                    setHotelFilter({
                      ...filterQuery,
                      checkOut: e.target.value,
                    })
                  );
                }}
              />
            </div>
          </div>

          <div className="md:flex-grow grid grid-cols-1 my-4 justify-center items-center gap-4 md:gap-6 mx-auto">
            {isLoading ? (
              <HotelCardSkeleton />
            ) : (
              hotels?.map((hotel: Hotel) => (
                <HotelCard key={hotel._id} {...hotel} />
              ))
            )}
          </div>
        </div>

        {totalPages != 1 && (
          <Pagination
            handlePages={(page) => {
              dispatch(
                setHotelFilter({
                  ...filterQuery,
                  page,
                })
              );
            }}
            currentPage={parseInt(currentPage)}
            totalPages={parseInt(totalPages)}
          />
        )}
      </Container>
    </Main>
  );
};

export default Hotel;
