import Container from "../../components/ui/container";
import Main from "../../layout/main";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  title: string;
  thumbnail: string;
  description: string;
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
          <label htmlFor="title">Title:</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
          <label htmlFor="thumbnail">Image:</label>
          <Controller
            name="thumbnail"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
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
