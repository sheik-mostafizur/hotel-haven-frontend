import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {login, logout, setError} from "./redux/authSlice";
import {auth} from "./config/firebase.config";
import {signOut} from "firebase/auth";

const App = ({children}) => {
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsGlobalLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const parsedUser = JSON.parse(JSON.stringify(user));
      if (user) {
        dispatch(login({user: parsedUser, token: user.uid}));
      } else {
        dispatch(logout());
        signOut(auth)
          .then((res) => console.log(res))
          .catch((err) => dispatch(setError(err.message)));
      }
      setIsGlobalLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return <>{isGlobalLoading ? "Loading..." : children}</>;
};

export default App;
