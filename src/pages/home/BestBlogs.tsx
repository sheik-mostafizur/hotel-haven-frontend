import Container from "../../components/ui/container";
import {useEffect, useState} from "react";
import Blogs from "./Blogs";
import fetchData from "../../hooks/fetch-data";

interface BestBlogs {
  thumbnail: string;
  title: string;
  description: string;
  authorName: string;
  authorProfile: string;
  publishDate: string;
}

const BestBlogs: React.FC = () => {
  const [bestBlogs, setBestBlog] = useState<BestBlogs[]>([]);
  useEffect(() => {
    fetchData("/db/best-blogs.json")
      .then((data) => setBestBlog(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="lg:py-20">
      <h2 className="mx-auto text-center">Discover Our Latest Blog Entries</h2>
      <p className="px-4 lg:px-16 text-center py-2 font-normal">
        Explore our blog section for captivating articles on travel, culture,
        and adventure. Get inspired and stay informed with our diverse
        collection of stories.
      </p>
      <div className="grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {bestBlogs.splice(0, 5).map((b, index) => (
          <Blogs key={index} {...b} />
        ))}
      </div>
    </Container>
  );
};

export default BestBlogs;
