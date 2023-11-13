import Main from "../../layout/main";
import Container from "../../components/ui/container";
import {BlogCard, BlogCardSkeleton} from "../../components/ui/card";
import {useGetPublicBlogsQuery} from "../../api/public-api";
import SetTitle from "../../components/set-title";
import {useState} from "react";
import Pagination from "../../components/pagination";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setBlogFilter} from "../../redux/blog-filter-slice";

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
  const query = useAppSelector((state) => state.blogFilter);
  const dispatch = useAppDispatch();

  const {data, isLoading} = useGetPublicBlogsQuery(query);
  const {data: blogs, totalPages, currentPage} = data || {};

  return (
    <Main>
      <SetTitle title="Blogs" />
      <Container className="py-4 lg:py-12">
        <h1 className="text-center my-4 font-bold">All Blogs</h1>
        <div className="mb-4 lg:mb-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
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
            handlePages={(page) => dispatch(setBlogFilter({...query, page}))}
            currentPage={parseInt(currentPage)}
            totalPages={parseInt(totalPages)}
          />
        )}
      </Container>
    </Main>
  );
};

export default Blogs;
