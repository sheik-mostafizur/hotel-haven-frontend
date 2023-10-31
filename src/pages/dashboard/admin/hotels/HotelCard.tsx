import {Link} from "react-router-dom";
import {axios} from "../../../../api";
import Button from "../../../../components/ui/button";
import STATUS from "../../../../constants/STATUS";
import toastError from "../../../../utils/toast-error";
import toastSuccess from "../../../../utils/toast-success";
import {HotelType} from "../../../../types";

type HotelCardProps = {
  hotel: HotelType.Hotel;
};

const HotelCard: React.FC<HotelCardProps> = ({hotel}) => {
  const {_id, name, addedRoom, availableRoom, email, status, photoURL} = hotel;

  console.log(hotel);
  const handleRoomApproved = async () => {
    try {
      const {
        data: {message},
      } = await axios.put(`/admin/hotel/status/${_id}`, {
        status: STATUS.APPROVED,
      });
      toastSuccess(message);
    } catch (error: any) {
      toastError(error);
    }
  };

  const handleRoomRejected = async () => {
    const feedback = prompt("Why Rejected? Please feedback: ");
    if (feedback) {
      try {
        const {
          data: {message},
        } = await axios.put(`/admin/hotel/status/${_id}`, {
          status: STATUS.REJECTED,
          feedback,
        });
        toastSuccess(message);
      } catch (error: any) {
        toastError(error);
      }
    }
  };

  // return <>lorem</>;
  return (
    <div>
      <div className="mx-auto h-full bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700">
        <img className="rounded-t-lg" src={photoURL} alt="" />
        <div className="p-5">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-secondary-900 dark:text-white">
            Name: {name}
          </h3>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Manger email: {email}
          </p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            availableRoom:{availableRoom}
          </p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Added Room: {addedRoom}
          </p>
          <p className="mb-3 font-normal text-secondary-700 dark:text-secondary-400">
            Status: {status}
          </p>
          <Button
            onClick={handleRoomApproved}
            isDisabled={status == STATUS.APPROVED}>
            Approved
          </Button>
          <Button
            onClick={handleRoomRejected}
            isDisabled={status == STATUS.REJECTED || status == STATUS.APPROVED}
            className="mx-2">
            Rejected
          </Button>
          <Link to={_id}>
            <Button>Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
