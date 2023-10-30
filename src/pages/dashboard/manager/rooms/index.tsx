import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Container from "../../../../components/ui/container";
import Button from "../../../../components/ui/button";
interface IFormInputs {
  title: string;
  thumbnails: string;
  facilities: string;
  capacity: {
    children: number;
    adult: number;
  };
  roomInfo: {
    bedType: string;
    view: number;
    roomSize: string;
    regularPrice: number;
    discountPrice: number;
    additionalInfo: string;
  };
}
const Rooms: React.FC = () => {
  const {handleSubmit, control, reset} = useForm<IFormInputs>({});
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <h2 className="text-center">Rooms form:</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Title</label>
          <Controller
            name="title"
            control={control}
            rules={{required: true}}
            render={({field}) => <input {...field} />}
          />
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="thumbnails">Thumbnails</label>
              <Controller
                name="thumbnails"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="facilities">Facilities </label>
              <Controller
                name="facilities"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="adult">Adult</label>
              <Controller
                name="capacity.adult"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} type="number" />}
              />
            </div>
            <div>
              <label htmlFor="child">Children</label>
              <Controller
                name="capacity.children"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} type="number" />}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
            <div>
              <label htmlFor="roomSize">Room Size</label>
              <Controller
                name="roomInfo.roomSize"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="regularPrice">Regular Price</label>
              <Controller
                name="roomInfo.regularPrice"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="discountPrice">Discount price</label>
              <Controller
                name="roomInfo.discountPrice"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="view">View</label>
              <Controller
                name="roomInfo.view"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} type="text" />}
              />
            </div>
            <div>
              <label htmlFor="bedType">Bed type</label>
              <Controller
                name="roomInfo.bedType"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="additionalInfo">additional info</label>
              <Controller
                name="roomInfo.additionalInfo"
                control={control}
                rules={{required: true}}
                render={({field}) => <input {...field} />}
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Add a new room
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Rooms;
