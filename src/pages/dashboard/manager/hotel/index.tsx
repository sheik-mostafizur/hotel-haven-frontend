import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Container from "../../../../components/ui/container";
import Button from "../../../../components/ui/button";
import { axios } from "../../../../api";
import toastError from "../../../../utils/toast-error";
import toastSuccess from "../../../../utils/toast-success";
import { useEffect, useState } from "react";
import { BeatSpinner, HashSpinner } from "../../../../components/spinner";
import ViewHotel from "./ViewHotel";
import { HotelType } from "../../../../types";

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

const hotelDefaultValue: HotelType.Hotel = {
  address: {
    map: {
      lat: 0,
      lng: 0,
    },
    thumbnailURL: "",
    location: "",
  },
  _id: "",
  managerId: "",
  name: "",
  photoURL: "",
  description: "",
  availableRoom: 0,
  status: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
};

const Hotel: React.FC = () => {
  const [hotel, setHotel] = useState<HotelType.Hotel>(hotelDefaultValue);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, control, reset } = useForm<IFormInputs>({});
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      const { data: resData } = await axios.post("/manager/hotel", data);
      toastSuccess(resData.message);
      setHotel(resData.hotel);
      reset();
    } catch (error: any) {
      toastError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/manager/hotel")
      .then(({ data }) => {
        setHotel(data);
        setIsLoading(false);
      })
      .catch((error) => {
        toastError(error);
        setIsLoading(false);
      });
  }, []);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/db/all-district.json")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
        // console.log(data);
      })
      .catch((error) => {
        toastError(error);
      });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <HashSpinner />
      ) : (
        <div>
          {hotel.managerId == "" ? (
            <>
              <h2 className="text-center">Hotel form:</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Hotel Name</label>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <input {...field} />}
                />
                <div className="grid w-full md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
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
                      render={({ field }) => (
                        <select
                          {...field}
                          className="bg-secondary-50 border text-secondary-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-800 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          <option value="" disabled>
                            Select a location
                          </option>
                          {locations.map((location: any) => (
                            <option key={location.id} value={location?.name}>
                              {location?.name}
                            </option>
                          ))}
                        </select>
                      )}
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
                      className="border-2 rounded-2xl w-full p-2"
                      rows={5}
                      cols={120}
                    />
                  )}
                />
                <Button type="submit" className="w-full mt-3">
                  {isLoading ? <BeatSpinner /> : "Add a new Hotel"}
                </Button>
              </form>
            </>
          ) : (
            <>
              {isLoading ? (
                <HashSpinner />
              ) : (
                <>{hotel.managerId && <ViewHotel hotel={hotel} />}</>
              )}
            </>
          )}
        </div>
      )}
    </Container>
  );
};

export default Hotel;
