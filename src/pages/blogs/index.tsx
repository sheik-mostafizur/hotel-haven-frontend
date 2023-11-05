import { Link } from "react-router-dom";
import Main from "../../layout/main";
import Button from "../../components/ui/button";
import { useEffect, useState } from "react";
import fetchData from "../../hooks/fetch-data";
import Container from "../../components/ui/container";
import { FcLikePlaceholder } from "react-icons/fc";

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
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    fetchData("/db/best-blogs.json")
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  const handleLike = (index: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].likes += 1;
    setBlogs(updatedBlogs);
  };

  return (
    <>
      <Main>
        <Container>
          <div className="m-4">
            <h1 className="text-center my-4 font-bold">See Our Recent Blogs</h1>
            <div className="grid  md:grid-cols-3 gap-3">
              {blogs.map((blog: BlogData, index: number) => (
                <div
                  key={index}
                  className=" bg-white p-2 mx-auto border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-700"
                >
                  <img
                    className="h-80 rounded-t-2xl"
                    src={blog.thumbnail}
                    alt={blog.title}
                  />

                  <div className="card-body">
                    <h5 className="py-2">{blog.title}</h5>
                    <p className="py-2">
                      {blog.description.slice(0, 100) + "..."}
                    </p>
                    <div className="card-actions py-2 flex justify-between items-center">
                      <div className="flex gap-2 justify-center items-center">
                        <div>
                          <img
                            className="rounded-full w-9 h-9"
                            src={blog.authorProfile}
                            alt=""
                          />
                        </div>
                        <div className="flex-col items-center">
                          <div className="badge badge-outline font-semibold">
                            <Link to="">{blog.authorName}</Link>
                          </div>
                          <div className="badge badge-secondary text-sm">
                            {blog.publishDate}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleLike(index)}
                        >
                          <FcLikePlaceholder className="text-3xl" />
                        </button>
                        <span className="text-sm">{blog.likes} Likes</span>
                      </div>
                      <Link to={`/blogs/${blog._id}`}>
                        <Button size="sm">Read Blog</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default Blogs;
