import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../redux/hooks";
import {useEffect} from "react";
import toastError from "../utils/toast-error";

interface ManagerProtectorProps {
  children: React.ReactNode;
}

const ManagerProtector: React.FC<ManagerProtectorProps> = ({children}) => {
  const navigate = useNavigate();
  const {user, isLoading} = useAppSelector((state) => state.auth);

  if (isLoading) return <h1>It's loading</h1>;

  useEffect(() => {
    if (user?.email === "" || user?.role != "MANAGER") {
      toastError({});
      navigate("/signin");
    }
  }, [user?.email]);

  return <>{children}</>;
};

export default ManagerProtector;
