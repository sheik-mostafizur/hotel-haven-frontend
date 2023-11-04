import {useParams} from "react-router-dom";

const Payment = () => {
  const {_id} = useParams();
  console.log("RoomID: ", _id);
  return (
    <div>
      <h1>Payment</h1>
    </div>
  );
};

export default Payment;
