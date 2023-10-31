import { useParams } from "react-router-dom";

const HotelDetails = () => {
  let { id } = useParams();
  console.log("managerId", id);
  return (
    <div>
      <h1>HotelDetails</h1>
    </div>
  );
};

export default HotelDetails;
