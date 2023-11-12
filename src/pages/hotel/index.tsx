import React, {useState} from "react";
import Container from "../../components/ui/container";
import AllHotelCard from "./AllHotelCard";
import Main from "../../layout/main";
import {useGetHotelsQuery, useGetLocationsQuery} from "../../api/public-api";
import {HashSpinner} from "../../components/spinner";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import Pagination from "../../components/pagination";
import SetTitle from "../../components/set-title";
import {setHotelFilter} from "../../redux/hotel-filter-slice";

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
  const filterQuery = useAppSelector((state) => state.hotelFilter);
  const hotelFilterState = useAppSelector((state) => state.hotelFilter);
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState({limit: 10, page: 1});

  const {data, isLoading} = useGetHotelsQuery({...query, ...filterQuery});
  const {data: hotels, totalPages, currentPage} = data || {};

  // TODO: waiting for logic
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <Main>
      <SetTitle title="Our hotels" />
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
                    className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-800 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    id="location"
                    value={hotelFilterState.location}
                    onChange={(e) =>
                      dispatch(
                        setHotelFilter({
                          ...hotelFilterState,
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
              </div>
              <div className="grid grid-cols-1 my-4 justify-center items-center gap-4 md:gap-6 mx-auto">
                {hotels &&
                  hotels.map((hotel: Hotel) => (
                    <AllHotelCard key={hotel._id} {...hotel} />
                  ))}
              </div>
            </div>
          </>
        )}
        {totalPages != 1 && (
          <Pagination
            handlePages={(page) => {
              setQuery({...query, page});
            }}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </Container>
    </Main>
  );
};

export default Hotel;
