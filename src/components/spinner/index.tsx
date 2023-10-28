import HashLoader from "react-spinners/HashLoader";
const Spinner = ({fullScreen = false, size = 100}) => {
  return (
    <div
      className={`flex items-center justify-center py-6 md:py-16 ${
        fullScreen && "h-screen"
      }`}>
      <HashLoader
        color="#f04935"
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
