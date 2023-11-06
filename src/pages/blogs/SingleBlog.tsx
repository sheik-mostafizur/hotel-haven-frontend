import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchData from "../../hooks/fetch-data";
import Container from "../../components/ui/container";
import Main from "../../layout/main";
import { FcLikePlaceholder } from "react-icons/fc";

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

  const [singleBlog, setSingleBlog] = useState<SingleBlog[]>([]);

  useEffect(() => {
    fetchData("/db/best-blogs.json")
      .then((data) => setSingleBlog(data))
      .catch((err) => console.log(err));
  }, []);

  const findData = singleBlog.find((blog: any) => blog._id == _id);

  // const handleLike = (index: number) => {
  //   const updatedBlogs = findData;
  //   updatedBlogs[index].likes += 1;
  //   setSingleBlog(updatedBlogs);
  // };

  console.log(findData);

  console.log(singleBlog);
  return (
    <Main>
      <Container>
        <div className=" sm:mx-16 md:mx-64">
          <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full h-72"
                src={findData?.thumbnail}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {findData?.title}
                </h5>
              </a>
              <div className="card-actions py-2 flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                  <div>
                    <img
                      className="rounded-full w-9 h-9"
                      src={findData?.authorProfile}
                      alt=""
                    />
                  </div>
                  <div className="flex-col items-center">
                    <div className="badge badge-outline font-semibold">
                      <Link to="">{findData?.authorName}</Link>
                    </div>
                    <div className="badge badge-secondary text-sm">
                      {findData?.publishDate}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {findData?.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-primary"
                    // onClick={() => handleLike(index)}
                  >
                    <FcLikePlaceholder className="text-3xl" />
                  </button>
                  <span className="text-sm">{findData?.likes} Likes</span>
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
