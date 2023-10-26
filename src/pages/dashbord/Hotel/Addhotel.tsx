import { useForm, Controller } from "react-hook-form";

const HotelForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission here, e.g., send data to an API
    console.log(data);
  };

  return (
    <div className="w-3/4 shadow mx-auto border  mt-5 p-10 ">
      <h4>Hotel Add From : </h4>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label>Name:</label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div>
            <label>Phone:</label>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label>Photo URL:</label>
            <Controller
              name="photoURL"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div>
            <label>Available Room:</label>
            <Controller
              name="availableRoom"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} type="number" />}
            />
          </div>
        </div>

        {/* Address section */}
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label> Location:</label>
            <Controller
              name="address.thumbnailURL"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div>
            <label> Location Thumbnail:</label>
            <Controller
              name="address.thumbnailURL"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
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
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div>
            <label>Longitude:</label>
            <Controller
              name="address.map.lng"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} />}
            />
          </div>
        </div>
        <label>Description:</label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
        />
        <button
          className="block bg-primary-500 rounded-lg py-4 px-8 mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
