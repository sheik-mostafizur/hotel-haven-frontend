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
const Hotel: React.FC<Hotel> = ({
  name,
  photoURL,
  address,
  availableRoom,
  description,
  _id,
}) => {
  console.log(name);
  return (
    <div>
      <div className="flex my-4 flex-col gap-10 items-center bg-white border border-secondary-200 rounded-lg shadow md:flex-row hover:bg-secondary-100 dark:border-secondary-700 dark:bg-secondary-800 dark:hover:bg-secondary-700">
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
            Address: {address.location}
          </p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Description: {description}
          </p>
          <div className="lg:flex gap-2">
            <Button>Accepted</Button>
            <Button>Rejected</Button>
            <Button>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
