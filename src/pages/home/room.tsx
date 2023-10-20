// import React from "react";
import Rating from "react-rating";
import Button from "../../components/ui/button";

const Room = ({price, rating, image}) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <p>Price: {price}</p>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <Rating
              placeholderRating={rating}
              // emptySymbol={
              //   <img src="assets/images/star-grey.png" className="icon" />
              // }
              placeholderSymbol={
                <img
                  src="https://t3.ftcdn.net/jpg/01/09/84/42/240_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
                  className="icon"
                />
              }
              //   fullSymbol={
              //     <img src="assets/images/star-yellow.png" className="icon" />
              //   }
            />
          </p>
          <Button size="sm">Book Now</Button>
        </div>
      </div>
    </>
  );
};

export default Room;
