import toast from "react-hot-toast";

interface ErrorObject {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

const toastError = (error: ErrorObject) => {
  // Ensure that error?.response?.data?.message is a non-empty string before passing it to toast.error
  if (error?.response?.data?.message) {
    toast.error(error.response.data.message);
  } else if (error.message) {
    toast.error(error.message);
  } else {
    // Handle the case where there's no message available
    toast.error("An error occurred");
  }
};

export default toastError;
