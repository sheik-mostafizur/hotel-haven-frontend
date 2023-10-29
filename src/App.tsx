import {ReactNode, useEffect} from "react";
import {axios} from "./api";
import {changeTheme} from "./redux/themeSlice";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {HashSpinner} from "./components/spinner";
import {userAuthActions} from "./redux/user-auth-slice";

type AppProps = {
  children: ReactNode;
};

const App: React.FC<AppProps> = ({children}) => {
  const themeColors = useAppSelector((state) => state.theme);
  const userAuthState = useAppSelector((state) => state.userAuth);
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(userAuthActions.setLoading(true));
    if (userAuthState?.user?.email) {
      dispatch(userAuthActions.setLoading(false));
      return;
    }

    const bearer = `Bearer ${token}`;
    if (token) {
      dispatch(userAuthActions.setLoading(false)); // Dispatch the action to set loading to true
      axios
        .get("user", {
          headers: {
            Authorization: bearer,
          },
        })
        .then(({data}) => {
          dispatch(userAuthActions.setUser(data));
        })
        .catch(() => dispatch(userAuthActions.setLoading(false))); // Dispatch the action to set loading to false
      return;
    }
    dispatch(userAuthActions.setLoading(false));
  }, [token, dispatch]); // Add dispatch as a dependency

  // checking theme from localStorage
  const themeLocalStorage = localStorage.getItem("theme");
  useEffect(() => {
    document.documentElement.className = themeColors;
    dispatch(changeTheme({theme: themeLocalStorage}));
  }, [themeColors, themeLocalStorage, dispatch]); // Add dispatch as a dependency

  return <>{userAuthState.isLoading ? <HashSpinner fullScreen /> : children}</>;
};

export default App;
