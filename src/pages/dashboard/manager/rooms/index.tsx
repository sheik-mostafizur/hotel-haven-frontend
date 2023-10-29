import { useForm, Controller, SubmitHandler } from "react-hook-form";
interface IFormInputs {
  title: string;
  thumbnails: string;
  facilities: string;
  startDate: string;
  endDate: string;
  bookedCount: number;
  child: number;
  adult: number;
  bedType: string;
  view: number;
  roomSize: string;
  regularPrice: number;
  discountPrice: number;
  additionalInfo: string;
  availability: string;
}
const Rooms: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({});
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h2 className="text-center">Rooms form:</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="thumbnails">Photo URL</label>
              <Controller
                name="thumbnails"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="facilities">Facilities </label>
              <Controller
                name="facilities"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="startDate">Start Date</label>
              <Controller
                name="startDate"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} type="date" />}
              />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <Controller
                name="endDate"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} type="date" />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="bookedCount">Booked Count</label>
              <Controller
                name="bookedCount"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} type="number" />}
              />
            </div>
            <div>
              <label htmlFor="availability">Availability</label>
              <Controller
                name="availability"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="adult">Adult</label>
              <Controller
                name="adult"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} type="number" />}
              />
            </div>
            <div>
              <label htmlFor="child">Children</label>
              <Controller
                name="child"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} type="number" />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="roomSize">Room Size</label>
              <Controller
                name="roomSize"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="regularPrice">Regular Price</label>
              <Controller
                name="regularPrice"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="discountPrice">Discount price</label>
              <Controller
                name="discountPrice"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="view">View</label>
              <Controller
                name="view"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} type="number" />}
              />
            </div>
            <div>
              <label htmlFor="bedType">Bed type</label>
              <Controller
                name="bedType"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="additionalInfo">additional info</label>
              <Controller
                name="additionalInfo"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
          </div>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default Rooms;
