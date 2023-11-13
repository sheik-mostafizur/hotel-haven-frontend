import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../../components/ui/button";
import Modal from "../../../../components/ui/modal";
import STATUS from "../../../../constants/STATUS";
import { HotelType } from "../../../../types";
import { useEffect, useState } from "react";
import toastError from "../../../../utils/toast-error";

type ViewHotelProps = {
  hotel: HotelType.Hotel;
};
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
const ViewHotel: React.FC<ViewHotelProps> = ({ hotel }) => {
  const { name, photoURL, address, availableRoom, description, status } = hotel;
  const { handleSubmit, control } = useForm<IFormInputs>({});

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log(data);
  };

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
    <div>
      <h2 className="text-center">Hotel</h2>
      <div
        className={`${status == STATUS.PENDING ? "bg-orange-200" : ""} ${
          status == STATUS.REJECTED ? "bg-red-200" : ""
        }`}
      >
        <div className="flex flex-col gap-10 my-4 items-center border border-secondary-200 rounded-lg shadow lg:flex-row dark:border-secondary-800 ">
          <img
            className=" rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src={photoURL}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary-900 dark:text-white">
              Name: {name}
            </h5>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Available Room: {availableRoom}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Location: {address.location}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Latitude: {address.map.lat}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Longitude: {address.map.lng}
            </p>
            <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
              Description: {description}
            </p>
            <div className="lg:flex gap-2">
              <Modal
                title="Edit your hotel"
                button={{ label: "Edit hotel", className: "block ml-auto" }}
                // className={`${
                //   hotel.status === STATUS.PENDING
                //     ? "bg-orange-400"
                //     : hotel.status === STATUS.REJECTED
                //     ? "bg-red-500"
                //     : ""
                // }`}
              >
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
                    Save
                  </Button>
                </form>
              </Modal>
              {/* <Link to={_id}>
                <Button>Details</Button>
              </Link> */}
            </div>
          </div>
        </div>
        {hotel?.feedback && <p>Feedback: {hotel?.feedback}</p>}
      </div>
    </div>
  );
};

export default ViewHotel;
