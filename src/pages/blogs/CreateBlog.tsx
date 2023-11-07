import Container from "../../components/ui/container";
import Main from "../../layout/main";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  likeCount: number;
}

const CreateBlog = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({});

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <Main>
      <Container>
        <div className="mx-auto my-4">
          <h2 className="text-center">Create a Blog</h2>
        </div>
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
                    className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    {...field}
                  >
                    <option defaultValue="Select Category">
                      Select Category
                    </option>
                    <option value="TA">Travel and Adventure</option>
                    <option value="BTT">Booking Tips and Tricks</option>
                    <option value="HR">
                      Hotel Reviews and Recommendations
                    </option>
                    <option value="GH">Gardening and Horticulture</option>
                    <option value="AC">Art and Creativity</option>
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
              render={({ field }) => <input {...field} />}
            />
          </div>
          <label htmlFor="description">Description</label>
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
          {/* <input type="submit" /> */}
        </form>
      </Container>
    </Main>
  );
};

export default CreateBlog;
