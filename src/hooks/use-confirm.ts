import swal from "sweetalert";

type UseConfirm = {
  title?: string;
  config?: object;
};

const useConfirm = async ({
  title = "Are you sure?",
  config,
}: UseConfirm = {}) => {
  const confirm = await swal(title, {
    buttons: ["Cancel", "Yes"],
    ...config,
  });
  return confirm;
};

export default useConfirm;
