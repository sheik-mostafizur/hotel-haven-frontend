import { Link } from "react-router-dom";
import Button from "../../components/ui/button";
import LazyLoad from "react-lazy-load";

interface Hotel {
  _id: number;
  name: string;
  location: string;
  description: string;
  photoURL: string;
  rating: number;
}

const Hotel: React.FC<Hotel> = ({
  location,
  name,
  photoURL,
  rating,
  description,
  _id,
}) => {
  return (
    <div className="content-to-animate">
      <div className=" bg-white h-full border border-secondary-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <LazyLoad>
          <img className="rounded-t-lg w-full h-80" src={photoURL} alt="" />
        </LazyLoad>
        <div className="p-5">
          <h3 className="py-2">{name}</h3>
          <p className="py-2">Location: {location}</p>
          <p className="py-2 text-sm">{description}</p>
          <p className="py-2">Rating: {rating}</p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400"></p>
          <Link to={`/hotel/${_id}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </div>

    // <div className="flex flex-col mx-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    //   <img
    //     className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    //     src={photoURL}
    //     alt=""
    //   />
    //   <div className="flex flex-col justify-between p-4 leading-normal">
    //     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //       {name}
    //     </h5>
    //     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //       {description}
    //     </p>
    //   </div>
    // </div>
  );
};

export default Hotel;
