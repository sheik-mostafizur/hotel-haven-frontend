import {useForm, Controller, SubmitHandler} from "react-hook-form";
import Container from "../../../../components/ui/container";
import Button from "../../../../components/ui/button";
import {useEffect, useState} from "react";
import {axios} from "../../../../api";
import toastError from "../../../../utils/toast-error";
interface IFormInputs {
  title: string;
  thumbnails: Array<string>;
  facilities: Array<string>;
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
  const [isLoading, setIsLoading] = useState(false);
  const [room, setRoom] = useState([]);

  const {handleSubmit, control, reset} = useForm<IFormInputs>({});
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/manager/room")
      .then(({data}) => {
        setRoom(data);
        setIsLoading(false);
      })
      .catch((error) => {
        toastError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      {room.length == 0 ? (
        <div>
          <h2 className="text-center">Rooms form:</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">Title</label>
            <Controller
              name="title"
              control={control}
              rules={{required: true}}
              render={({field}) => <input {...field} />}
            />
            <div className="grid md:grid-cols-1 lg:grid-cols-3 py-2 gap-4">
              <div>
                <label htmlFor="thumbnails[0]">Thumbnails 1</label>
                <Controller
                  name="thumbnails[0]"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => <input {...field} />}
                />
              </div>
              <div>
                <label htmlFor="thumbnails[1]">Thumbnails 2</label>
                <Controller
                  name="thumbnails[1]"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => <input {...field} />}
                />
              </div>
              <div>
                <label htmlFor="thumbnails[2]">Thumbnails 3</label>
                <Controller
                  name="thumbnails[2]"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => <input {...field} />}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-4 py-2 gap-4">
              <div>
                <label htmlFor="facilities[0]">Facilities 1</label>
                <Controller
                  name="facilities[0]"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => <input {...field} />}
                />
              </div>
              <div>
                <label htmlFor="facilities[1]">Facilities 2</label>
                <Controller
                  name="facilities[1]"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => <input {...field} />}
                />
              </div>
              <div>
                <label htmlFor="facilities[2]">Facilities 3</label>
                <Controller
                  name="facilities[2]"
                  control={control}
                  rules={{required: true}}
                  render={({field}) => <input {...field} />}
                />
              </div>
              <div>
                <label htmlFor="facilities[3]">Facilities 4</label>
                <Controller
                  name="facilities[3]"
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
      ) : (
        <>{JSON.stringify(room)}</>
      )}
    </Container>
  );
};

export default Rooms;
