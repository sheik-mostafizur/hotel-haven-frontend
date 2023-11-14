import swal from "sweetalert";

const useConfirm = async ({title = "Are you sure?", config} = {}) => {
  const confirm = await swal(title, {
    buttons: ["Cancel", "Yes"],
    ...config,
  });
  return confirm;
};

export default useConfirm;
