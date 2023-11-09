import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Container from "../../../components/ui/container";
import Button from "../../../components/ui/button";
import BLOG_CATEGORIES from "../../../constants/BLOG_CATEGORIES";
import { usePostBlogsMutation } from "../../../api/private-api";
import toastError from "../../../utils/toast-error";
import toastSuccess from "../../../utils/toast-success";
import Modal from "../../../components/ui/modal";

interface IFormInputs {
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  likeCount: number;
}

const CreateBlog = () => {
  const [postBlogs] = usePostBlogsMutation();
  const { handleSubmit, control, reset } = useForm<IFormInputs>({});

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    postBlogs(data)
      .unwrap()
      .then(({ message }) => {
        toastSuccess(message);
      })
      .catch(({ data: { message } }) => {
        const error = { message };
        toastError(error);
      });
  };

  return (
    <Container>
      <Modal
        title={"Create a new blog"}
        button={{ label: "Add Blog", className: "block ml-auto" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mx-auto items-center">
            <div>
              <label htmlFor="title">Title:</label>
              <Controller
                name="title"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <Controller
                name="category"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-800 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    {...field}
                  >
                    <option defaultValue="">Select Category</option>
                    {BLOG_CATEGORIES?.map((option, index) => (
                      <option key={option.value + index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>
          <div>
            <label htmlFor="thumbnail">Image:</label>
            <Controller
              name="thumbnail"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input type="url" {...field} />}
            />
          </div>
          <label htmlFor="description">Description min char 100</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <textarea
                {...field}
                className="border-2 rounded-2xl w-full p-2"
                rows={5}
                cols={120}
              />
            )}
          />
          <Button type="submit" className="mt-4">
            Create new blog
          </Button>
        </form>
      </Modal>
    </Container>
  );
};

export default CreateBlog;
