import Button from "../../components/ui/button";

interface Room {
  price: number;
  image: string;
}

const Room: React.FC<Room> = ({price, image}) => {
  return (
    <>
      <div className=" bg-white mx-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <p>Price: {price}</p>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <Button size="sm">Book Now</Button>
        </div>
      </div>
    </>
  );
};

export default Room;
