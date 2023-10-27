import {useForm, Controller} from "react-hook-form";
import Button from "../../../../components/ui/button";
import toastSuccess from "../../../../utils/toast-success";
import toastError from "../../../../utils/toast-error";
import {axios} from "../../../../api";

const AddAHotel = () => {
  const {handleSubmit, control, reset} = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission here, e.g., send data to an API
    axios
      .post("/manager/hotel", data)
      .then(({data}) => {
        reset();
        toastSuccess(data.message);
      })
      .catch((error) => toastError(error));
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
              rules={{
                required: true,
              }}
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Available Room:</label>
            <Controller
              name="availableRoom"
              control={control}
              rules={{
                required: true,
              }}
              render={({field}) => <input {...field} type="number" />}
            />
          </div>
        </div>
        <div>
          <label>Photo URL:</label>
          <Controller
            name="photoURL"
            control={control}
            rules={{
              required: true,
            }}
            render={({field}) => <input {...field} />}
          />
        </div>

        {/* Address section */}
        <div className="grid lg:grid-cols-2 gap-2 justify-center">
          <div>
            <label> Location:</label>
            <Controller
              name="address.location"
              control={control}
              rules={{
                required: true,
              }}
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label> Location Thumbnail:</label>
            <Controller
              name="address.thumbnailURL"
              control={control}
              rules={{
                required: true,
              }}
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
              rules={{
                required: true,
              }}
              render={({field}) => <input {...field} />}
            />
          </div>
          <div>
            <label>Longitude:</label>
            <Controller
              name="address.map.lng"
              control={control}
              rules={{
                required: true,
              }}
              render={({field}) => <input {...field} />}
            />
          </div>
        </div>
        <label>Description:</label>
        <Controller
          name="description"
          control={control}
          rules={{
            required: true,
          }}
          render={({field}) => <input {...field} />}
        />
        <Button type="submit" size="lg" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddAHotel;
