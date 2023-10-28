import {Navigate, useLocation} from "react-router";
import {useAppSelector} from "../redux/hooks";
import Spinner from "../components/spinner";

interface PrivateProtectorProps {
  children: React.ReactNode;
}

const PrivateProtector: React.FC<PrivateProtectorProps> = ({children}) => {
  const location = useLocation();

  const {user, isLoading} = useAppSelector((state) => state.auth);

  if (isLoading) return <Spinner />;

  if (user?.email === "") {
    return <Navigate to="/signin" state={{from: location}} replace />;
  }

  return children;
};

export default PrivateProtector;
