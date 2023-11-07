import Main from "../../layout/main";
import React, { useEffect, useState } from "react";
import fetchData from "../../hooks/fetch-data";
import Container from "../../components/ui/container";
import { BlogCard } from "../../components/card";
import Button from "../../components/ui/button";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./dropdown.css";
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
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchData("/db/best-blogs.json")
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Main>
        <Container>
          <div className="m-4">
            <h1 className="text-center my-4 font-bold">See Our Recent Blogs</h1>

            <div className=" my-4">
              <div className="dropdown">
                <Button className="dropbtn">
                  <BsThreeDotsVertical />
                </Button>
                <div className="dropdown-content max-w-2xl">
                  <Link
                    className="hover:bg-secondary-200 btn"
                    to={"/createBlog"}
                  >
                    Create Blog
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
              {blogs.map((blog: BlogData) => (
                <BlogCard key={blog._id} blog={blog} isLoading={isLoading} />
              ))}
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default Blogs;
