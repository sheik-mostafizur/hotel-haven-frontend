import Button from "../../components/ui/button";

interface Hotel {
  _id: number;
  title: string;
  location: string;
  description: string;
  thumbnailURL: string;
  rating: number;
}

const Hotel: React.FC<Hotel> = ({
  location,
  title,
  thumbnailURL,
  rating,
  description,
}) => {
  return (
    <div className="content-to-animate">
      <div className=" bg-white border border-secondary-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg w-full h-80" src={thumbnailURL} alt="" />
        </a>
        <div className="p-5">
          <h3 className="py-2">{title}</h3>
          <p className="py-2">Location: {location}</p>
          <p className="py-2 text-sm">{description}</p>
          <p className="py-2">Rating: {rating}</p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400"></p>
          <div className="text-center">
            <Button size="sm">View Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
