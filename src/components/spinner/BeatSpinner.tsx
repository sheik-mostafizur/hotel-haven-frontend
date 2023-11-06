import BeatLoader from "react-spinners/BeatLoader";

const BeatSpinner = ({size = 8, color = "#fef3f2"}) => {
  return <BeatLoader color={color} size={size} />;
};

export default BeatSpinner;
