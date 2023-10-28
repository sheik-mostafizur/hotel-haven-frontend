import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../redux/hooks";
import {useEffect} from "react";
import toastError from "../utils/toast-error";

interface IsAuthenticatedProps {
  children: React.ReactNode;
}

const AuthProtector: React.FC<IsAuthenticatedProps> = ({children}) => {
  const navigate = useNavigate();
  const {user, isLoading} = useAppSelector((state) => state.auth);

  if (isLoading) return <h1>It's loading</h1>;

  useEffect(() => {
    if (user?.email === "") {
      navigate("/signin");
      toastError({});
    }
  }, [user?.email]);

  return children;
};

export default AuthProtector;
