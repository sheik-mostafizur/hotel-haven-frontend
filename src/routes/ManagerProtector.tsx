import {Navigate, useLocation} from "react-router-dom";
import {useAppSelector} from "../redux/hooks";
import ROLE from "../constants/ROLE";
import {HashSpinner} from "../components/spinner";

interface ManagerProtectorProps {
  children: React.ReactNode;
}

const ManagerProtector: React.FC<ManagerProtectorProps> = ({children}) => {
  const location = useLocation();

  const {user, isLoading} = useAppSelector((state) => state.auth);

  if (isLoading) return <HashSpinner fullScreen />;

  if (user?.email === "" || user?.role !== ROLE.MANAGER) {
    return <Navigate to="/signin" state={{from: location}} replace />;
  }

  return children;
};

export default ManagerProtector;
