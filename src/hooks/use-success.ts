import swal from "sweetalert";

const useSuccess = ({
  title = "This modal will disappear soon!",
  timer = 1500,
} = {}) => {
  swal(title, {
    icon: "success",
    buttons: [false],
    timer,
  });
};

export default useSuccess;
