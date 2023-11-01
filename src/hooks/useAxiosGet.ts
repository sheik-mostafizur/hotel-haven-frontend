import {useEffect, useState} from "react";
import {axios} from "../api";

const useAxiosGet = (url: string, params = {}) => {
  const [error, setError] = useState({});
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url, {params})
      .then(({data: loadedData}) => {
        setData(loadedData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);
  return {error, data, isLoading};
};

export default useAxiosGet;
