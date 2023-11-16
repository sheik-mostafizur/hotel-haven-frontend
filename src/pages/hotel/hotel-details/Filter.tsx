import Container from "../../../components/ui/container";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {setHotelFilter} from "../../../redux/hotel-filter-slice";
import formatDateToYYYYMMDD from "../../../utils/format-date-to-YYYYMMDD";

const Filter = ({isLoading}) => {
  const hotelFilter = useAppSelector((state) => state.hotelFilter);
  const dispatch = useAppDispatch();

  const checkInMinDate = formatDateToYYYYMMDD();

  let currentCheckIn = new Date(hotelFilter.checkIn);
  const day = currentCheckIn.getDate();
  currentCheckIn.setDate(day + 1);
  const checkOutMinDate = formatDateToYYYYMMDD(currentCheckIn);

  return (
    <>
      {isLoading ? (
        <Container className="animate-pulse bg-white">
          <div className="h-8 max-w-lg mx-auto bg-secondary-200 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 mt-4">
            <div>
              <div className="h-6 w-56 bg-secondary-200 rounded"></div>
              <div className="h-10 mt-2 bg-secondary-200 rounded"></div>
            </div>
            <div>
              <div className="h-6 w-56 bg-secondary-200 rounded"></div>
              <div className="h-10 mt-2 bg-secondary-200 rounded"></div>
            </div>
            <div>
              <div className="h-6 w-56 bg-secondary-200 rounded"></div>
              <div className="h-10 mt-2 bg-secondary-200 rounded"></div>
            </div>
            <div>
              <div className="h-6 w-56 bg-secondary-200 rounded"></div>
              <div className="h-10 mt-2 bg-secondary-200 rounded"></div>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <h3 className="text-center">Choose your room</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
            <div>
              <label htmlFor="checkIn">Check In Date</label>
              <input
                id="checkIn"
                defaultValue={hotelFilter.checkIn}
                type="date"
                min={checkInMinDate}
                onChange={(e) =>
                  dispatch(
                    setHotelFilter({
                      ...hotelFilter,
                      checkIn: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="">
              <label htmlFor="checkOut">Check Out Date</label>
              <input
                id="checkOut"
                defaultValue={hotelFilter.checkOut}
                type="date"
                min={checkOutMinDate}
                onChange={(e) =>
                  dispatch(
                    setHotelFilter({
                      ...hotelFilter,
                      checkOut: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="">
              <label htmlFor="adult">Adult</label>
              <input
                id="adult"
                type="number"
                min="1"
                max="6"
                defaultValue={hotelFilter.adult}
                onChange={(e) =>
                  dispatch(
                    setHotelFilter({
                      ...hotelFilter,
                      adult: e.target.value,
                    })
                  )
                }
              />
            </div>
            <div className="">
              <label htmlFor="child">Children</label>
              <input
                id="child"
                type="number"
                min="0"
                max="6"
                defaultValue={hotelFilter.children}
                onChange={(e) =>
                  dispatch(
                    setHotelFilter({
                      ...hotelFilter,
                      children: e.target.value,
                    })
                  )
                }
              />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Filter;
