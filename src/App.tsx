import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {login, logout, setError, setUser} from "./redux/authSlice";
import {auth} from "./config/firebase.config";
import {signOut} from "firebase/auth";
import axios from "axios";

const App = ({children}) => {
  const [isAppLoading, setIsAppLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsAppLoading(true);

    const isUser = localStorage.getItem("user");
    if (isUser) {
      dispatch(setUser({user: JSON.parse(isUser)}));
      return setIsAppLoading(false);
    }

    const token = localStorage.getItem("token");
    const bearer = `Bearer ${token}`;
    if (token) {
      axios
        .get("user", {
          headers: {
            Authorization: bearer,
          },
        })
        .then(({data}) => {
          dispatch(setUser({user: data}));
          setIsAppLoading(false);
        })
        .catch((err) => setIsAppLoading(false));
      return;
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      const parsedUser = JSON.parse(JSON.stringify(user));
      if (user) {
        dispatch(login({user: parsedUser, token: user.uid}));
      } else {
        dispatch(logout());
        signOut(auth)
          .then()
          .catch((err) => dispatch(setError(err.message)));
      }
      setIsAppLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return <>{isAppLoading ? "Loading..." : children}</>;
};

export default App;
