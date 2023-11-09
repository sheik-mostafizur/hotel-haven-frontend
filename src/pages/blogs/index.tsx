import Main from "../../layout/main";
import Container from "../../components/ui/container";
import {BlogCard} from "../../components/ui/card";
import {HashSpinner} from "../../components/spinner";
import {useGetPublicBlogsQuery} from "../../api/public-api";

interface BlogData {
  _id: number;
  thumbnail: string;
  title: string;
  description: string;
  authorName: string;
  authorProfile: string;
  publishDate: string;
  likes: number;
}

const Blogs: React.FC = () => {
  const {data: blogs, isLoading} = useGetPublicBlogsQuery({});

  return (
    <>
      <Main>
        <Container>
          <div className="m-4">
            <h1 className="text-center my-4 font-bold">All Blogs</h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {isLoading ? (
                <HashSpinner />
              ) : (
                blogs?.map((blog: BlogData) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))
              )}
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default Blogs;
