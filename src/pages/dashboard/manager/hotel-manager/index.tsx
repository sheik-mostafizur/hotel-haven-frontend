import {useEffect, useState} from "react";
import {axios} from "../../../../api";
import toastError from "../../../../utils/toast-error";

const HotelManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/manager/hotel")
      .then(({data}) => {
        setHotel(data);
        setIsLoading(false);
      })
      .catch((error) => {
        toastError(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <>{isLoading ? <h1>Loading...</h1> : <div>{JSON.stringify(hotel)}</div>}</>
  );
};

export default HotelManager;
