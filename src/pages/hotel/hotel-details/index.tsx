import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { _id } = useParams();
  console.log(_id);
  return (
    <div>
      <h1>HotelDetails</h1>
    </div>
  );
};

export default HotelDetails;
