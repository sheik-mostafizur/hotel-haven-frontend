import {useDispatch, useSelector} from "react-redux";
import {continueToGoogle, login} from "../../redux/authSlice";
import {auth, googleProvider} from "../../config/firebase.config";
import {signInWithPopup} from "@firebase/auth";

const ContinueWithGoogle = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const handleGoogleLogin = () => {
    dispatch(continueToGoogle())
      .unwrap()
      .then((user) => {
        // Handle successful login
      })
      .catch((err) => {
        // Handle error, you can access the error message from the Redux store (state.user.error)
        console.error("Google login error:", err);
      });
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
