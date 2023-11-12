import Container from "../../components/ui/container";
import React from "react";
import {BlogCard, BlogCardSkeleton} from "../../components/ui/card";
import {useGetPublicBlogsQuery} from "../../api/public-api";

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
  const {data, isLoading} = useGetPublicBlogsQuery({
    descending: true,
  });
  const {data: blogs} = data || {};

  return (
    <Container className="lg:py-20">
      <h2 className="mx-auto text-center">Discover Our Latest Blog Entries</h2>
      <p className="px-4 lg:px-16 text-center py-2 font-normal">
        Explore our blog section for captivating articles on travel, culture,
        and adventure. Get inspired and stay informed with our diverse
        collection of stories.
      </p>

      <div className="grid gap-4 md:gap-6 py-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto">
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
