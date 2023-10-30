import { useForm, Controller, SubmitHandler } from "react-hook-form";
interface IFormInputs {
  name: string;
  photoURL: string;
  address: {
    thumbnailURL: string;
    location: string;
    map: { lat: string; lng: string };
  };
  availableRoom: number;
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
          <label htmlFor="name">Hotel Name</label>
          <Controller
            name="name"
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
              <label htmlFor="locationName">Location Name</label>
              <Controller
                name="address.location"
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
                name="address.thumbnailURL"
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
                name="address.map.lat"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="Longitude">Longitude</label>
              <Controller
                name="address.map.lng"
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
