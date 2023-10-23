// import React from "react";
// import Rating from "react-rating";
import Button from "../../components/ui/button";

interface Room {
  price: number;
  image: string;
}

const Room: React.FC<Room> = ({ price, image }) => {
  return (
    <>
      <div className=" bg-white mx-auto border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <p>Price: {price}</p>
          </a>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400"></p>
          <Button size="sm">Book Now</Button>
        </div>
      </div>
    </>
  );
};

export default Room;
