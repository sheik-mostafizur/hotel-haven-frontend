import Container from "../../components/ui/container";
import React from "react";
import {BlogCard, BlogCardSkeleton} from "../../components/ui/card";
import {useGetPublicBlogsQuery} from "../../api/public-api";
import {useAppSelector} from "../../redux/hooks";

interface BestBlogs {
  _id: number;
  thumbnail: string;
  title: string;
  description: string;
  authorName: string;
  authorProfile: string;
  publishDate: string;
  likes: number;
}

const BestBlogs: React.FC = () => {
  const query = useAppSelector((state) => state.blogFilter);
  const {data, isLoading} = useGetPublicBlogsQuery(query);
  const {data: blogs} = data || {};

  return (
    <Container className="lg:my-20">
      <div className="mb-6 text-center">
        <h2 className="mx-auto uppercase text-center">
          Discover Our Latest Blog Entries
        </h2>
        <p className="">
          Discover a curated selection of the world's finest hotels, where
          opulence meets comfort.
        </p>
      </div>
      <div className="grid gap-4 md:gap-6 py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto">
        {isLoading ? (
          <BlogCardSkeleton items={4} />
        ) : (
          blogs
            ?.slice(0, 4)
            .map((blog: BestBlogs) => <BlogCard key={blog._id} blog={blog} />)
        )}
      </div>
    </Container>
  );
};

export default BestBlogs;
