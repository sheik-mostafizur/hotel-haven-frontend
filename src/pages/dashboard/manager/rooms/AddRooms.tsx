import {useForm, Controller} from "react-hook-form";

const AddRooms = () => {
  const {handleSubmit, control} = useForm();
  const onSubmit = (data: any) => {
    // Handle form submission here, e.g., send data to an API
    console.log(data);
  };
  return (
    <div className="w-3/4 shadow mx-auto border  mt-5 p-10 ">
      <h4>Room Add From : </h4>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label>Title:</label>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Facilities:</label>
            <Controller
              name="facilities"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label>Thumbnail:</label>
            <Controller
              name="thumbnail"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Total Booked:</label>
            <Controller
              name="bookedCount"
              control={control}
              defaultValue="0"
              render={({field}) => <input {...field} type="number" />}
            />
          </div>
        </div>
        {/* date section */}
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label>Start date:</label>
            <Controller
              name="availability.startDate"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} type="date" />}
            />
          </div>
          <div>
            <label>End date:</label>
            <Controller
              name="availability.endDate"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} type="date" />}
            />
          </div>
        </div>
        {/* Address section */}
        <div className="grid lg:grid-cols-2 py-2 gap-2 justify-center">
          <div>
            <label> Location:</label>
            <Controller
              name="address.location"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label> Location Thumbnail:</label>
            <Controller
              name="address.thumbnailURL"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
        </div>
        {/* availability & capacity */}
        {/* className="grid lg:grid-cols-2 gap-2 justify-center" */}
        <div>
          <label>Availability check:</label>
          <Controller
            name="availability.IsAvailable"
            control={control}
            defaultValue=""
            render={({field}) => (
              <select
                {...field}
                className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option defaultValue="Select your option">
                  Select your option
                </option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            )}
          />
        </div>
        {/* capacity section */}
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label>Adult:</label>
            <Controller
              name="capacity.adult"
              control={control}
              defaultValue=""
              render={({field}) => (
                <input {...field} type="number" max={11} min={0} />
              )}
            />
          </div>
          <div>
            <label>Child:</label>
            <Controller
              name="capacity.child"
              control={control}
              defaultValue=""
              render={({field}) => (
                <input {...field} type="number" max={11} min={0} />
              )}
            />
          </div>
        </div>
        {/* Room Information section */}
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label>Room Size:</label>
            <Controller
              name="roomInfo.roomSize"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>View:</label>
            <Controller
              name="roomInfo.view"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Bed Type:</label>
            <Controller
              name="roomInfo.bedType"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Regular Price:</label>
            <Controller
              name="roomInfo.regularPrice"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Discount Price:</label>
            <Controller
              name="roomInfo.discountedPrice"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Additional Info:</label>
            <Controller
              name="roomInfo.additionalInfo"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label>Latitude:</label>
            <Controller
              name="address.map.lat"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Longitude:</label>
            <Controller
              name="address.map.lng"
              control={control}
              defaultValue=""
              render={({field}) => <input {...field} />}
            />
          </div>
        </div>
        <label>Description:</label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({field}) => <input {...field} />}
        />
        <button
          className="block bg-primary-500 rounded-lg py-4 px-8 mt-5"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRooms;
