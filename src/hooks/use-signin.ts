import swal from "sweetalert";

const useSignin = async ({title = "Please signin your account"} = {}) => {
  const confirm = await swal(title, {
    buttons: ["Cancel", "Sign In"],
  });
  return confirm;
};

export default useSignin;
