import {useGetBlogsQuery} from "../../../api/private-api";
import {HashSpinner} from "../../../components/spinner";
import CreateBlog from "./CreateNewBlog";

const BlogsDashboard = () => {
  const {data: blogs, isLoading} = useGetBlogsQuery(undefined);

  return (
    <div>
      <h1>You can create new blog</h1>
      <CreateBlog />

      <h2>Created Blogs</h2>
      {isLoading ? <HashSpinner /> : JSON.stringify(blogs)}
    </div>
  );
};

export default BlogsDashboard;
