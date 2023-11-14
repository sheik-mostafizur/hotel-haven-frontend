import swal from "sweetalert";

const useWarning = ({title = "Should be do it!"} = {}) => {
  swal(title, {
    icon: "warning",
    buttons: [false],
  });
};

export default useWarning;
