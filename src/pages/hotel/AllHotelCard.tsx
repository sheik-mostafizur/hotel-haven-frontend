import { Link } from "react-router-dom";
import Button from "../../components/ui/button";

interface HotelsCard {
  _id: string;
  name: string;
  location: string;
  description: string;
  photoURL: string;
  rating: number;
}

const AllHotelCard: React.FC<HotelsCard> = ({
  location,
  name,
  photoURL,
  rating,
  description,
  _id,
}) => {
  return (
    <div>
      <div className="flex flex-col mx-auto items-center bg-white border border-secondary-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-secondary-100 dark:border-secondary-700 dark:bg-secondary-800 dark:hover:bg-secondary-700">
        <img
          className="object-cover w-64 rounded-t-lg h-72 md:rounded-none md:rounded-l-lg"
          src={photoURL}
          alt={name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2">{name}</h5>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Location: {location}
          </p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Rating: {rating}
          </p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Description: {description}
          </p>
          <Link to={`/hotel/${_id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllHotelCard;
