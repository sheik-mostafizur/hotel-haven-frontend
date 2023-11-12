import {Link, useParams} from "react-router-dom";
import Container from "../../components/ui/container";
import Main from "../../layout/main";
import {FcLikePlaceholder} from "react-icons/fc";
import {useGetBlogByIdQuery} from "../../api/private-api";
import {HashSpinner} from "../../components/spinner";
import SetTitle from "../../components/set-title";

interface SingleBlog {
  _id: number;
  thumbnail: string;
  title: string;
  description: string;
  userName: string;
  userProfile: string;
  publishDate: string;
  likeCount: number;
}

const SingleBlog: React.FC = () => {
  const {_id} = useParams();
  const {data: blog, isLoading} = useGetBlogByIdQuery(_id);

  return (
    <Main>
      <SetTitle title={blog?.title} />
      <Container>
        {isLoading ? (
          <HashSpinner />
        ) : (
          <div className="max-w-4xl mx-auto py-4 md:py-16">
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg w-full"
                  src={blog?.thumbnail}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog?.title}
                  </h5>
                </a>
                <div className="card-actions py-2 flex justify-between items-center">
                  <div className="flex gap-2 justify-center items-center">
                    <div>
                      <img
                        className="rounded-full w-9 h-9"
                        src={blog?.userProfile}
                        alt={blog?.userName}
                      />
                    </div>
                    <div className="flex-col items-center">
                      <div className="badge badge-outline font-semibold">
                        <Link to={`/profile/${blog?.userId}`}>
                          {blog?.userName}
                        </Link>
                      </div>
                      <div className="badge badge-secondary text-sm">
                        {blog?.publishDate}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {blog?.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button className="btn btn-primary">
                      <FcLikePlaceholder className="text-3xl" />
                    </button>
                    <span className="text-sm">{blog?.likeCount} Likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Main>
  );
};

export default SingleBlog;
