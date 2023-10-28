import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../redux/hooks";
import {useEffect} from "react";
import toastError from "../utils/toast-error";
import ROLE from "../constants/ROLE";

interface AdminProtectorProps {
  children: React.ReactNode;
}

const AdminProtector: React.FC<AdminProtectorProps> = ({children}) => {
  const navigate = useNavigate();
  const {user, isLoading} = useAppSelector((state) => state.auth);

  if (isLoading) return <h1>It's loading</h1>;

  useEffect(() => {
    if (user?.email === "" || user?.role !== ROLE.ADMIN) {
      toastError({});
      navigate("/signin");
    }
  }, [user?.email]);

  return children;
};

export default AdminProtector;
