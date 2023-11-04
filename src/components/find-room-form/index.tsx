import {useForm, Controller} from "react-hook-form";
import Button from "../ui/button";
import {useGetLocationsQuery} from "../../api/public-api";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setHotelFilter} from "../../redux/hotel-filter-slice";

const FindRoomForm = () => {
  const {isLoading, data: locations} = useGetLocationsQuery(undefined);
  const hotelFilter = useAppSelector((state) => state.hotelFilter);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      location: hotelFilter.location,
      checkIn: hotelFilter.checkIn,
      checkOut: hotelFilter.checkOut,
    },
  });

  const onSubmit = (data) => {
    dispatch(setHotelFilter(data));
  };

  return (
    <div className="bg-primary-50 p-4 md:px-8 md:py-12 rounded-lg shadow shadow-primary-100 max-w-2xl">
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
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                {isLoading ? (
                  <option defaultValue="Choose a Location">
                    Choose a Location
                  </option>
                ) : (
                  <>
                    <option defaultValue="Choose a Location">
                      Choose a Location
                    </option>
                    {locations &&
                      locations.map((location) => (
                        <option key={location._id} value={location.location}>
                          {location.address}
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
                  min={new Date().toISOString().slice(0, 16)}
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
                <input id="checkOut" {...field} type="date" />
              )}
              name="checkOut"
            />
          </div>
        </div>

        <Button type="submit" className="w-full" size="lg">
          Search
        </Button>
      </form>
    </div>
  );
};

export default FindRoomForm;
