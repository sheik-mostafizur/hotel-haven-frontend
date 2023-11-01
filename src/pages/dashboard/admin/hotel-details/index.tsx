import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {axios} from "../../../../api";
import toastError from "../../../../utils/toast-error";
import {HashSpinner} from "../../../../components/spinner";

const HotelDetails = () => {
  const {_id} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [hotelDetails, setHotelDetails] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/admin/hotel/${_id}`)
      .then(({data}) => {
        setIsLoading(false);
        setHotelDetails(data);
      })
      .catch((error: any) => {
        toastError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>{isLoading ? <HashSpinner /> : <>{JSON.stringify(hotelDetails)}</>}</>
  );
};

export default HotelDetails;
