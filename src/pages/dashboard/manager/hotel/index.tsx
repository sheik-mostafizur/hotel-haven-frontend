import { useForm, Controller, SubmitHandler } from "react-hook-form";
interface IFormInputs {
  hotelName: string;
  photoURL: string;
  availableRoom: number;
  managerName: string;
  managerEmail: string;
  locationName: string;
  locationThumbnailURL: string;
  Latitude: string;
  Longitude: string;
  description: string;
}
const Hotel: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({});
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <h2 className="text-center">Hotel form:</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="hotelName">Hotel Name</label>
          <Controller
            name="hotelName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="photoURL">Photo URL</label>
              <Controller
                name="photoURL"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="availableRoom">Available room</label>
              <Controller
                name="availableRoom"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="managerName">Manager Name</label>
              <Controller
                name="managerName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="managerEmail">Manager Email</label>
              <Controller
                name="managerEmail"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} type="email" />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="locationName">Location Name</label>
              <Controller
                name="locationName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="locationThumbnailURL">
                Location ThumbnailURL
              </label>
              <Controller
                name="locationThumbnailURL"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="Latitude">Latitude</label>
              <Controller
                name="Latitude"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="Longitude">Longitude</label>
              <Controller
                name="Longitude"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
          </div>
          <label htmlFor="description">Description</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <textarea
                {...field}
                className="border-2 rounded-2xl"
                rows={5}
                cols={120}
              />
            )}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default Hotel;
