import {useAppSelector} from "../redux/hooks";

const useIsAuthenticated = (callback: any) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) return {};
  console.log("is");
  return callback;
};

export default useIsAuthenticated;
