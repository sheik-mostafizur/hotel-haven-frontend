import Main from "../../layout/main";
import Container from "../../components/ui/container";
import {BlogCard, BlogCardSkeleton} from "../../components/ui/card";
import {useGetPublicBlogsQuery} from "../../api/public-api";
import SetTitle from "../../components/set-title";
import {useState} from "react";
import Pagination from "../../components/pagination";

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
  const [query, setQuery] = useState({limit: 10, page: 1, descending: true});

  const {data, isLoading} = useGetPublicBlogsQuery(query);
  const {data: blogs, totalPages, currentPage} = data || {};

  return (
    <>
      <Main>
        <SetTitle title="Blogs" />
        <Container className="py-4 lg:py-12">
          <h1 className="text-center my-4 font-bold">All Blogs</h1>
          <div className="mb-4 lg:mb-8 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
            {isLoading ? (
              <BlogCardSkeleton />
            ) : (
              blogs?.map((blog: BlogData) => (
                <BlogCard key={blog._id} blog={blog} />
              ))
            )}
          </div>
          {totalPages != 1 && (
            <Pagination
              handlePages={(page) => setQuery((prev) => ({...prev, page}))}
              currentPage={parseInt(currentPage)}
              totalPages={parseInt(totalPages)}
            />
          )}
        </Container>
      </Main>
    </>
  );
};

export default Blogs;
