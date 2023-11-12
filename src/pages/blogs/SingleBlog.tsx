import {Link, useParams} from "react-router-dom";
import Container from "../../components/ui/container";
import Main from "../../layout/main";
import {
  useDeleteBlogBookmarkByIdMutation,
  useGetBlogBookmarkQuery,
  useGetBlogByIdQuery,
  useGetLikedQuery,
  usePostBlogBookmarkMutation,
  usePostLikeBlogMutation,
  useRemoveLikeBlogMutation,
} from "../../api/private-api";
import {HashSpinner} from "../../components/spinner";
import SetTitle from "../../components/set-title";
import formatPostDate from "../../utils/format-post-date";
import {AiOutlineLike, AiTwotoneLike} from "react-icons/ai";
import toastSuccess from "../../utils/toast-success";
import toastError from "../../utils/toast-error";
import {BsBookmarkStar, BsBookmarkStarFill} from "react-icons/bs";

interface SingleBlog {
  _id: number;
  thumbnail: string;
  title: string;
  description: string;
  userName: string;
  userProfile: string;
  publishDate: string;
  likeCount: number;
  createdAt?: string;
}

const SingleBlog: React.FC = () => {
  const {_id} = useParams();
  const {data: blog, isLoading, refetch} = useGetBlogByIdQuery(_id);

  const {data: bookmark} = useGetBlogBookmarkQuery(undefined);
  const [postBlogBookmark] = usePostBlogBookmarkMutation();
  const [deleteBlogBookmarkById] = useDeleteBlogBookmarkByIdMutation();

  const {data: liked} = useGetLikedQuery(undefined);

  const [postLikeBlog] = usePostLikeBlogMutation();
  const [removeLikeBlog] = useRemoveLikeBlogMutation();

  const handleAddBlogBookmark = () => {
    postBlogBookmark({blogId: _id})
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };

  const handleRemoveBlogBookmark = () => {
    deleteBlogBookmarkById(_id)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };

  const handleLike = () => {
    postLikeBlog(_id)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
        refetch();
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };

  const handleRemoveLike = () => {
    removeLikeBlog(_id)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
        refetch();
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };

  const iconStyle = {
    inactive:
      "w-12 text-secondary-500 text-2xl cursor-pointer hover:text-secondary-900 dark:text-white",
    active: "w-12 text-secondary-900 text-2xl cursor-pointer dark:text-white",
  };
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
                <div className="flex items-center justify-between gap-4">
                  <h3 className="mb-2">{blog?.title}</h3>
                  {bookmark?.some((item: any) => item.blogId === _id) ? (
                    <BsBookmarkStarFill
                      onClick={handleRemoveBlogBookmark}
                      className={iconStyle.active}
                    />
                  ) : (
                    <BsBookmarkStar
                      onClick={handleAddBlogBookmark}
                      className={iconStyle.inactive}
                    />
                  )}
                </div>
                <p className="my-4 font-normal text-gray-700 dark:text-gray-400">
                  {blog?.description}
                </p>

                <div className="py-2 flex justify-between items-center">
                  <Link
                    to={`/profile/${blog?.userId}`}
                    className="group flex gap-2 justify-center items-center">
                    <img
                      className="rounded-full w-9 h-9 group-hover:outline outline-1 outline-primary-100"
                      src={blog?.userProfile}
                      alt={blog?.userName}
                    />
                    <div className="flex flex-col ">
                      <span className="font-semibold group-hover:underline dark:text-white">
                        {blog?.userName}
                      </span>
                      <small className="text-sm text-secondary-500 dark:text-white">
                        {formatPostDate(blog?.createdAt)}
                        {/* TODO: check this property from backend */}
                      </small>
                    </div>
                  </Link>
                  <div className="flex items-center justify-center gap-1">
                    {liked?.includes(_id) ? (
                      <AiTwotoneLike
                        onClick={handleRemoveLike}
                        className={iconStyle.active}
                      />
                    ) : (
                      <AiOutlineLike
                        onClick={handleLike}
                        className={iconStyle.inactive}
                      />
                    )}
                    <span className="text-secondary-500 text-lg dark:text-white">
                      {blog?.likeCount}
                    </span>
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
