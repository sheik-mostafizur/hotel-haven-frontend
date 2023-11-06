import {Link} from "react-router-dom";
import {AiOutlineLike, AiTwotoneLike} from "react-icons/ai";
import {BsBookmarkStar, BsBookmarkStarFill} from "react-icons/bs";
import {BlogType} from "../../types";

interface BlogCardProps {
  blog: BlogType.Blog;
  isLoading: boolean;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const {
    _id,
    title,
    thumbnail,
    description,
    likeCount,
    publishDate,
    isLiked = false,
    isBooked = false,
    userId,
    userName,
    userProfile,
  } = props.blog;

  const isLoading = props.isLoading;

  const iconStyle = {
    inactive:
      "w-12 text-secondary-500 text-2xl cursor-pointer hover:text-secondary-900 dark:text-white",
    active: "w-12 text-secondary-900 text-2xl cursor-pointer dark:text-white",
  };

  return (
    <>
      {isLoading ? (
        <div className="animate-pulse bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-700 dark:border-secondary-600">
          <div className="rounded-t-lg w-full h-72 bg-primary-50"></div>
          <div className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-md mb-2 w-full h-12 bg-primary-50"></div>
              <div className="rounded-md mb-2 w-12 h-12 bg-primary-50"></div>
            </div>
            <div className="rounded-md mb-2 w-full h-28 bg-primary-50"></div>
            <div className="py-2 flex justify-between items-center">
              <div className="group flex gap-2 justify-center items-center">
                <div className="rounded-full w-9 h-9 bg-primary-50"></div>

                <div className="flex flex-col ">
                  <div className="mb-1 rounded-md w-full min-w-[100px] h-6 bg-primary-50"></div>
                  <div className="rounded-md w-full min-w-[100px] h-4 bg-primary-50"></div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="rounded-md w-12  h-12 bg-primary-50"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-700 dark:border-secondary-600">
          <img
            className="rounded-t-lg w-full h-72"
            src={thumbnail}
            alt={title}
          />
          <div className="p-5">
            <div className="flex items-center justify-between gap-4">
              <Link
                to={`/blogs/${_id}`}
                className="mb-2 text-2xl font-bold text-secondary-900 dark:text-white hover:underline">
                {title}
              </Link>
              {isBooked ? (
                <BsBookmarkStarFill className={iconStyle.active} />
              ) : (
                <BsBookmarkStar className={iconStyle.inactive} />
              )}
            </div>

            {description.length >= 150 ? (
              <p className="mb-3 text-secondary-500">
                {description.slice(0, 150)}{" "}
                <Link
                  to={`/blogs/${_id}`}
                  className="font-semibold text-secondary-500 dark:text-white hover:underline">
                  read more
                </Link>
              </p>
            ) : (
              <p className="mb-3">{description}</p>
            )}

            <div className="py-2 flex justify-between items-center">
              <Link
                to={`/profile/${userId}`}
                className="group flex gap-2 justify-center items-center">
                <img
                  className="rounded-full w-9 h-9 group-hover:outline outline-1 outline-primary-100"
                  src={userProfile}
                  alt=""
                />
                <div className="flex flex-col ">
                  <span className="font-semibold group-hover:underline dark:text-white">
                    {userName}
                  </span>
                  <small className="text-sm text-secondary-500 dark:text-white">
                    {publishDate}
                  </small>
                </div>
              </Link>
              <div className="flex items-center justify-center gap-1">
                {isLiked ? (
                  <AiTwotoneLike className={iconStyle.active} />
                ) : (
                  <AiOutlineLike className={iconStyle.inactive} />
                )}

                <span className="text-secondary-500 text-lg dark:text-white">
                  {likeCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
