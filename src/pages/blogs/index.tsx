import Main from "../../layout/main";
import Container from "../../components/ui/container";
import {BlogCard} from "../../components/ui/card";
import {useGetPublicBlogsQuery} from "../../api/public-api";
import useSetTitle from "../../hooks/useSetTitle";
import BlogCardSkeleton from "../../components/ui/card/blog-card/BlogCardSkeleton";

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
  useSetTitle("Blogs");
  const {data: blogs, isLoading} = useGetPublicBlogsQuery({
    descending: true,
  });

  return (
    <>
      <Main>
        <Container>
          <div className="m-4">
            <h1 className="text-center my-4 font-bold">All Blogs</h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
              {isLoading ? (
                <BlogCardSkeleton />
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
