import {Helmet} from "react-helmet-async";

const SetTitle = ({title = ""}) => {
  return (
    <Helmet>
      <title>{title} | HotelHaven</title>
    </Helmet>
  );
};

export default SetTitle;
