import Button from "../../../../components/ui/button";

interface Hotel {
  name: string;
  photoURL: string;
  address: {
    thumbnailURL: string;
    location: string;
    map: { lat: string; lng: string };
  };
  availableRoom: number;
  description: string;
  _id: string;
}
const HotelCard: React.FC<Hotel> = ({
  name,
  photoURL,
  address,
  availableRoom,
  description,
}) => {
  return (
    <div>
      <div className="mx-auto h-full bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
        <img className="rounded-t-lg" src={photoURL} alt="" />
        <div className="p-5">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-secondary-900 dark:text-white">
            Name: {name}
          </h3>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Location:{address.location}
          </p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Available Room: {availableRoom}
          </p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Description: {description}
          </p>
          <Button className="">Accepted</Button>
          <Button className="">Rejected</Button>
          <Button className="">Details</Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
