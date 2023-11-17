import {useForm, Controller} from "react-hook-form";
import Button from "../ui/button";
import {useGetLocationsQuery} from "../../api/public-api";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setHotelFilter} from "../../redux/hotel-filter-slice";
import {useLocation, useNavigate} from "react-router-dom";
import formatDateToYYYYMMDD from "../../utils/format-date-to-YYYYMMDD";

const FindRoomForm = () => {
  const locationURL = useLocation();
  const navigate = useNavigate();

  const {isLoading, data: locations = {}} = useGetLocationsQuery(undefined);
  const hotelFilter = useAppSelector((state) => state.hotelFilter);
  const dispatch = useAppDispatch();

  const filterLocations = Object.entries(locations)
    .map(([address, count]) => ({
      address,
      count: `${address} (${count})`,
    }))
    .sort((a, b) => {
      const addressA = a.address.toLowerCase();
      const addressB = b.address.toLowerCase();

      if (addressA < addressB) return -1;
      if (addressA > addressB) return 1;
      return 0;
    });

  const {
    control,
    handleSubmit,
    watch,
    // formState: {errors},
  } = useForm({
    mode: "all",
    defaultValues: {
      location: hotelFilter.location,
      checkIn: hotelFilter.checkIn,
      checkOut: hotelFilter.checkOut,
      adult: hotelFilter.adult,
      children: hotelFilter.children,
    },
  });

  const onSubmit = (data: any) => {
    dispatch(setHotelFilter(data));
    if (locationURL.pathname == "/") {
      navigate("/hotel");
    }
  };

  const checkInMinDate = formatDateToYYYYMMDD();

  let currentCheckIn = new Date(watch("checkIn"));
  const day = currentCheckIn.getDate();
  currentCheckIn.setDate(day + 1);
  const checkOutMinDate = formatDateToYYYYMMDD(currentCheckIn);

  return (
    <div className="bg-primary-100/70 backdrop-blur p-4 md:px-8 md:py-12 rounded-lg shadow shadow-primary-100 max-w-2xl dark:bg-secondary-800 dark:border-secondary-800 dark:shadow-secondary-800">
      <h2>Find Your Room</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label htmlFor="location">Select Your Destination</label>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field}) => (
              <select
                id="location"
                {...field}
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-800 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                {isLoading ? (
                  <option value="">Choose a Location</option>
                ) : (
                  <>
                    <option value="">Choose a Location</option>
                    {filterLocations &&
                      filterLocations?.map((location) => (
                        <option key={location.address} value={location.address}>
                          {location.count}
                        </option>
                      ))}
                  </>
                )}
              </select>
            )}
            name="location"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="checkIn">Check In Date</label>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field}) => (
                <input
                  id="checkIn"
                  {...field}
                  type="date"
                  min={checkInMinDate}
                />
              )}
              name="checkIn"
            />
          </div>
          <div>
            <label htmlFor="checkOut">Check Out Date</label>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field}) => (
                <input
                  id="checkOut"
                  {...field}
                  type="date"
                  min={checkOutMinDate}
                  disabled={!watch("checkIn")}
                />
              )}
              name="checkOut"
            />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="adult">Adult</label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input type="number" id="adult" {...field} min={1} max={6} />
              )}
              name="adult"
            />
          </div>
          <div>
            <label htmlFor="child">Child</label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input type="number" id="child" {...field} min={0} max={6} />
              )}
              name="child"
            />
          </div>
        </div> */}

        <Button type="submit" className="w-full" size="lg">
          Search
        </Button>
      </form>
    </div>
  );
};

export default FindRoomForm;
