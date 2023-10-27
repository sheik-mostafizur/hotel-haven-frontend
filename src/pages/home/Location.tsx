import "./Location.css";
interface Location {
  image: string;
  location_name: string;
  total_hotels: number;
}

const Location: React.FC<Location> = ({image, location_name, total_hotels}) => {
  //   console.log(image);
  return (
    <div
      id="card"
      className="bg-white mx-auto border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
      <img id="class-img" className="w-full h-80 " src={image} alt="image" />
      <div className="" id="card-body">
        <h3 id="title" className=" text-white">
          Location: {location_name}
        </h3>
        <p id="info" className=" text-white">
          Total Hotel: {total_hotels}
        </p>
      </div>
    </div>
  );
};

export default Location;
