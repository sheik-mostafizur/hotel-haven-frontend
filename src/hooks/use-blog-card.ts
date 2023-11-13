import {useLocation, useNavigate} from "react-router-dom";
import {useSignin} from ".";
import {
  useDeleteBlogBookmarkByIdMutation,
  useGetBlogBookmarkQuery,
  useGetLikedQuery,
  usePostBlogBookmarkMutation,
  usePostLikeBlogMutation,
  useRemoveLikeBlogMutation,
} from "../api/private-api";
import {useGetPublicBlogsQuery} from "../api/public-api";
import {useAppSelector} from "../redux/hooks";
import toastError from "../utils/toast-error";
import toastSuccess from "../utils/toast-success";

const useBlogCard = (blogId: string) => {
  const navigate = useNavigate();
  const locations = useLocation();

  const query = useAppSelector((state) => state.blogFilter);
  const isAuthenticated = localStorage.getItem("token") ? true : false;

  const {refetch} = useGetPublicBlogsQuery(query);

  const {data: bookmark} = isAuthenticated
    ? useGetBlogBookmarkQuery(undefined)
    : {data: null};
  const [postBlogBookmark] = usePostBlogBookmarkMutation();
  const [deleteBlogBookmarkById] = useDeleteBlogBookmarkByIdMutation();

  const {data: liked} = isAuthenticated
    ? useGetLikedQuery(undefined)
    : {data: null};
  const [postLikeBlog] = usePostLikeBlogMutation();
  const [removeLikeBlog] = useRemoveLikeBlogMutation();

  const handleAddBookmark = async () => {
    if (!isAuthenticated) {
      if (await useSignin()) {
        return navigate("/signin", {state: {from: {...locations}}});
      }
      return;
    }

    postBlogBookmark({blogId})
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };

  const handleRemoveBookmark = () => {
    deleteBlogBookmarkById(blogId)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };

  const handleLike = async () => {
    if (!isAuthenticated) {
      if (await useSignin()) {
        return navigate("/signin", {state: {from: {...locations}}});
      }
      return;
    }

    postLikeBlog(blogId)
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
    removeLikeBlog(blogId)
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
  return {
    bookmark,
    liked,
    handleAddBookmark,
    handleRemoveBookmark,
    handleLike,
    handleRemoveLike,
  };
};

export default useBlogCard;
