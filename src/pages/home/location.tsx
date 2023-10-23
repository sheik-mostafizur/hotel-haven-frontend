import "./location.css";
interface Location {
  image: string;
  location_name: string;
  total_hotels: number;
}

const Location: React.FC<Location> = ({
  image,
  location_name,
  total_hotels,
}) => {
  //   console.log(image);
  return (
    <div className="card bg-white mx-auto border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
      <img className="w-full h-80 class-img" src={image} alt="image" />
      <div className="card-body ">
        <h3 className="title text-white">Location: {location_name}</h3>
        <p className="info text-white">Total Hotel: {total_hotels}</p>
      </div>
    </div>
  );
};

export default Location;
