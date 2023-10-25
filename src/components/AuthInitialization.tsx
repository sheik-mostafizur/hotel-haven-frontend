import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {initAuth} from "../redux/authSlice";

function AuthInitialization() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuth());
  }, [dispatch]);

  return null; // You don't need to render anything here
}

export default AuthInitialization;
