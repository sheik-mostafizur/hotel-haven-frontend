import axios from "axios";
import {useEffect, useState} from "react";

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
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>{isLoading ? <h1>Loading...</h1> : <div>{JSON.stringify(hotel)}</div>}</>
  );
};

export default HotelManager;
