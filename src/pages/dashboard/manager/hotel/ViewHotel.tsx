import Button from "../../../../components/ui/button";
import STATUS from "../../../../constants/STATUS";

const ViewHotel: React.FC = ({ hotel }) => {
  /*
  set an edit button we don't need delete button
  if status is pending color will be: bg-orange-200
  if status is rejected color will be: bg-red-200
  else noting
  */

  const { name, photoURL, address, availableRoom, description } = hotel;
  // console.log(hotel.status);
  return (
    <div>
      <h2 className="text-center">Hotel</h2>
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
              <Button
                className={`${
                  hotel.status === STATUS.PENDING
                    ? "bg-orange-400"
                    : hotel.status === STATUS.REJECTED
                    ? "bg-red-500"
                    : ""
                }`}
              >
                Edit hotel
              </Button>
              <Button>Details</Button>
            </div>
          </div>
        </div>
      </div>
      {hotel?.feedback && <p>Feedback: {hotel?.feedback}</p>}
    </div>
  );
};

export default ViewHotel;
