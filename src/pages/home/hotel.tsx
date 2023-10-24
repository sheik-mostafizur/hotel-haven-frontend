import Button from "../../components/ui/button";

interface Hotel {
  _id: number;
  title: string;
  location: string;
  description: string;
  price: number;
  thumbnailURL: string;
  rating: number;
}

const Hotel: React.FC<Hotel> = ({
  price,
  location,
  title,
  thumbnailURL,
  rating,
  description,
}) => {
  return (
    <>
      <div className="bg-white mx-auto border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
        <a href="#">
          <img className="rounded-t-lg w-full h-80" src={thumbnailURL} alt="" />
        </a>
        <div className="p-5">
          <h3>{title}</h3>
          <p>Location: {location}</p>
          <p>{description}</p>
          <p>Rating: {rating}</p>

          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400"></p>
          <Button size="sm">See More</Button>
        </div>
      </div>
    </>
  );
};

export default Hotel;
