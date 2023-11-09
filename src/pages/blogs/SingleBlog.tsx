import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/ui/container";
import Main from "../../layout/main";
import { useGetPublicBlogsQuery } from "../../api/public-api";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";

interface SingleBlog {
  _id: number;
  thumbnail: string;
  title: string;
  description: string;
  authorName: string;
  authorProfile: string;
  publishDate: string;
  likes: number;
}

const SingleBlog: React.FC = () => {
  const { _id } = useParams();
  const { data: blogs, isLoading } = useGetPublicBlogsQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const findData = blogs.find((blog: any) => blog._id == _id);

  const {
    thumbnail,
    title,
    isFavorite,
    description,
    userId,
    userProfile,
    userName,
    publishDate,
    isLiked,
    likeCount,
  } = findData;

  if (!findData) {
    return <p>Blog not found</p>;
  }

  const iconStyle = {
    inactive:
      "w-12 text-secondary-500 text-2xl cursor-pointer hover:text-secondary-900 dark:text-white",
    active: "w-12 text-secondary-900 text-2xl cursor-pointer dark:text-white",
  };

  return (
    <Main>
      <Container>
        <div className="sm:mx-16 md:mx-64">
          <div className="bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-700 dark:border-secondary-800">
            <img
              className="rounded-t-lg w-full max-h-96"
              src={thumbnail}
              alt={title}
            />
            <div className="p-5">
              <div className="flex items-center justify-between gap-4">
                <Link
                  to={`/blogs/${_id}`}
                  className="mb-2 text-2xl font-bold text-secondary-900 dark:text-white hover:underline"
                >
                  {title}
                </Link>
                {isFavorite ? (
                  <BsBookmarkStarFill className={iconStyle.active} />
                ) : (
                  <BsBookmarkStar className={iconStyle.inactive} />
                )}
              </div>

              <p className="mb-3">{description}</p>

              <div className="py-2 flex justify-between items-center">
                <Link
                  to={`/profile/${userId}`}
                  className="group flex gap-2 justify-center items-center"
                >
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
                      {new Date(publishDate).toLocaleString(undefined, {
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
        </div>
      </Container>
    </Main>
  );
};

export default SingleBlog;
