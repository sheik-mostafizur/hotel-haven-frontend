import {useDispatch, useSelector} from "react-redux";
import {login, setError, setLoading} from "../../redux/authSlice";
import {signInWithPopup} from "firebase/auth";
import {auth, googleProvider} from "../../config/firebase.config";

const ContinueWithGoogle = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleGoogleLogin = async () => {
    try {
      dispatch(setLoading(true));
      const result = await signInWithPopup(auth, googleProvider);
      const user = JSON.parse(JSON.stringify(result.user));
      dispatch(setLoading(false));
      dispatch(login({user, token: user.uid}));
    } catch (error) {
      dispatch(setLoading(false));
      return dispatch(setError(error.message));
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      disabled={isLoading}
      className="cursor-pointer mb-2 mr-2 rounded-lg border border-secondary-200 bg-white py-1 pe-4 ps-2 text-sm font-medium text-secondary-900 hover:bg-secondary-100 hover:text-primary-600 focus:z-10 focus:outline-none focus:ring-4 focus:ring-secondary-200 dark:border-secondary-600 dark:bg-secondary-800 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:hover:text-white dark:focus:ring-secondary-700">
      <img
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        alt="google"
        className="inline-block h-8 w-8"
      />
      {isLoading ? "Loading..." : "Continue with Google"}
    </button>
  );
};

export default ContinueWithGoogle;
