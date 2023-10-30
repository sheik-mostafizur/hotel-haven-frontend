import STATUS from "../../../../constants/STATUS";

const ViewHotel: React.FC = ({hotel}) => {
  /*
  set an edit button we don't need delete button
  if status is pending color will be: bg-orange-200
  if status is rejected color will be: bg-red-200
  else noting
  */
  return (
    <div
      className={`${hotel.status === STATUS.PENDING ? "bg-orange-200" : ""}`}>
      <h1>ViewHotel</h1>
      {JSON.stringify(hotel)}
      {hotel?.feedback && <p>Feedback: {hotel?.feedback}</p>}
    </div>
  );
};

export default ViewHotel;
