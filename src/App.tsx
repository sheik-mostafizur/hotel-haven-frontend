import {ReactNode, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "./redux/authSlice";
import {axios} from "./api";
import {changeTheme} from "./redux/themeSlice";
import {useAppSelector} from "./redux/hooks";

type AppProps = {
  children: ReactNode;
};

const App: React.FC<AppProps> = ({children}) => {
  const themeColors = useAppSelector((state) => state.theme);
  const [isAppLoading, setIsAppLoading] = useState(false);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  useEffect(() => {
    const isUser = localStorage.getItem("user");
    if (isUser) {
      dispatch(setUser({user: JSON.parse(isUser)}));
      return setIsAppLoading(false);
    }

    const bearer = `Bearer ${token}`;
    if (token) {
      setIsAppLoading(true);
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
        .catch(() => setIsAppLoading(false));
      return;
    }
  }, [token]);

  // checking theme from localStorage
  const themeLocalStorage = localStorage.getItem("theme");
  useEffect(() => {
    document.documentElement.className = themeColors;
    dispatch(changeTheme({theme: themeLocalStorage}));
  }, [themeColors, themeLocalStorage]);

  return <>{isAppLoading ? "Loading..." : children}</>;
};

export default App;
