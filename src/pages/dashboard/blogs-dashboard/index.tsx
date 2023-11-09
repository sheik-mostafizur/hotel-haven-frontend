import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../../../api/private-api";
import { HashSpinner } from "../../../components/spinner";
import CreateBlog from "./CreateNewBlog";
import { useAppSelector } from "../../../redux/hooks";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import useSetTitle from "../../../hooks/useSetTitle";

const BlogsDashboard = () => {
  useSetTitle("Blogs - Dashboard");
  const { data: blogs, isLoading } = useGetBlogsQuery(undefined);
  const user = useAppSelector((state) => state.auth.user);

  const iconStyle = {
    inactive:
      "w-12 text-secondary-500 text-2xl cursor-pointer hover:text-secondary-900 dark:text-white",
    active: "w-12 text-secondary-900 text-2xl cursor-pointer dark:text-white",
  };

  return (
    <div>
      <h1 className="text-center">Blogs</h1>
      <CreateBlog />

      <h2 className="mb-4">My Blogs</h2>

      {isLoading ? (
        <HashSpinner />
      ) : blogs && blogs.length > 0 ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {blogs.map((blog: any) => (
            <div
              key={blog?._id}
              className="relative bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-700 dark:border-secondary-800"
            >
              <img
                className="rounded-t-lg w-full h-72"
                src={blog?.thumbnail}
                alt={blog?.title}
              />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <Link
                    to={`/blogs/${blog?._id}`}
                    className="mb-2 text-2xl font-bold text-secondary-900 dark:text-white hover:underline"
                  >
                    {blog?.title}
                  </Link>
                  {blog?.isFavorite ? (
                    <BsBookmarkStarFill className={iconStyle.active} />
                  ) : (
                    <BsBookmarkStar className={iconStyle.inactive} />
                  )}
                </div>

                {blog?.description.length >= 90 ? (
                  <p className="mb-3 text-secondary-500">
                    {blog?.description.slice(0, 90)}{" "}
                    <Link
                      to={`/blogs/${blog?._id}`}
                      className="font-semibold text-secondary-500 dark:text-white hover:underline"
                    >
                      read more
                    </Link>
                  </p>
                ) : (
                  <p className="mb-3">{blog?.description}</p>
                )}

                <div className="py-2 flex justify-between items-center">
                  <Link
                    to={`/profile/${blog?.userId}`}
                    className="group flex gap-2 justify-center items-center"
                  >
                    <img
                      className="rounded-full w-9 h-9 group-hover:outline outline-1 outline-primary-100"
                      src={user?.photoURL}
                      alt=""
                    />
                    <div className="flex flex-col ">
                      <span className="font-semibold group-hover:underline dark:text-white">
                        {user?.name}
                      </span>
                      <small className="text-sm text-secondary-500 dark:text-white">
                        {new Date(blog?.createdAt).toLocaleString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        })}
                      </small>
                    </div>
                  </Link>
                  <div className="flex items-center justify-center gap-1">
                    {blog?.isLiked ? (
                      <AiTwotoneLike className={iconStyle.active} />
                    ) : (
                      <AiOutlineLike className={iconStyle.inactive} />
                    )}

                    <span className="text-secondary-500 text-lg dark:text-white">
                      {blog?.likeCount}
                    </span>
                  </div>
                </div>
              </div>
              {blog?.category && (
                <div
                  className="absolute top-2 right-2 bg-secondary-500 text-white px-2 py-1 rounded"
                  style={{ opacity: 0.8 }}
                >
                  {blog?.category.toUpperCase()}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>You haven't added any blogs yet.</p>
      )}
    </div>
  );
};

export default BlogsDashboard;
