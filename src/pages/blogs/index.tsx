import Main from "../../layout/main";
import Container from "../../components/ui/container";
import { BlogCard } from "../../components/ui/card";
import { useGetPublicBlogsQuery } from "../../api/public-api";
import useSetTitle from "../../hooks/useSetTitle";
import BlogCardSkeleton from "../../components/ui/card/BlogCardSkeleton";

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

const generateSkeletons = (count: number) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(<BlogCardSkeleton key={i} />);
  }
  return skeletons;
};

const Blogs: React.FC = () => {
  useSetTitle("Blogs");
  const { data: blogs, isLoading } = useGetPublicBlogsQuery({
    descending: true,
  });

  return (
    <>
      <Main>
        <Container>
          <div className="m-4">
            <h1 className="text-center my-4 font-bold">All Blogs</h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
              {isLoading
                ? generateSkeletons(10)
                : blogs?.map((blog: BlogData) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default Blogs;
