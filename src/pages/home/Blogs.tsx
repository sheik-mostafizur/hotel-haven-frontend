import React from "react";
import "./Blog.css";
import {FcLikePlaceholder} from "react-icons/fc";
import {BlogType} from "../../types";

interface Blogs {
  _id: number;
  thumbnail: string;
  title: string;
  description: string;
  authorName: string;
  authorProfile: string;
  publishDate: string;
  likes: number;
}

const Blogs: React.FC<BlogType.Blog> = ({
  thumbnail,
  title,
  description,
  userName,
  userProfile,
  publishDate,
}) => {
  return (
    <>
      <div
        id="fadeIn"
        className="bg-white mx-auto border border-secondary-200 rounded-lg shadow dark:bg-secondary-800 dark:border-secondary-800">
        <img
          className="h-80 w-full object-cover rounded-t-2xl"
          src={thumbnail}
          alt={title}
        />
        <div className="p-4">
          <h5 className="py-2">{title}</h5>
          <p className="py-2">{description.slice(0, 80)}...</p>
          <div className="py-2 flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <div>
                <img
                  className="rounded-full w-10 h-10"
                  src={userProfile}
                  alt=""
                />
              </div>
              <div className="flex-col items-center">
                <h5>{userName}</h5>
                <p>{publishDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FcLikePlaceholder className="text-2xl" />
              <p className="text-xl text-secondary-500">0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
