import {Navigate, useLocation} from "react-router-dom";
import {useAppSelector} from "../redux/hooks";
import ROLE from "../constants/ROLE";
import {HashSpinner} from "../components/spinner";

interface AdminProtectorProps {
  children: React.ReactNode;
}

const AdminProtector: React.FC<AdminProtectorProps> = ({children}) => {
  const location = useLocation();
  const {user, isLoading} = useAppSelector((state) => state.auth);

  if (isLoading) return <HashSpinner fullScreen />;

  if (user?.email === "" || user?.role !== ROLE.ADMIN) {
    return <Navigate to="/signin" state={{from: location}} replace />;
  }

  return children;
};

export default AdminProtector;
