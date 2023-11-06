import {
  useDeleteWishlistByIdMutation,
  useGetWishlistQuery,
} from "../../../api/private-api";
import Button from "../../../components/ui/button";
import toastError from "../../../utils/toast-error";
import toastSuccess from "../../../utils/toast-success";

const Wishlist = () => {
  const {data: wishlist} = useGetWishlistQuery(undefined);
  const [deleteWishlistById] = useDeleteWishlistByIdMutation();

  const handleDeleteWishlist = (_id) => {
    deleteWishlistById(_id)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };
  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist?.map((item) => (
        <div key={item._id}>
          {JSON.stringify(item)}
          <Button size="sm" onClick={() => handleDeleteWishlist(item._id)}>
            remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
