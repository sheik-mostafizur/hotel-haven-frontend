import {
  useDeleteWishlistByIdMutation,
  useGetWishlistQuery,
} from "../../../api/private-api";
import { HashSpinner } from "../../../components/spinner";
import Button from "../../../components/ui/button";
import Container from "../../../components/ui/container";
import toastError from "../../../utils/toast-error";
import toastSuccess from "../../../utils/toast-success";

const Wishlist = () => {
  const { data: wishlist, isLoading } = useGetWishlistQuery(undefined);
  const [deleteWishlistById] = useDeleteWishlistByIdMutation();

  const handleDeleteWishlist = (_id: any) => {
    deleteWishlistById(_id)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({ data }) => {
        const error = { message: data?.message };
        toastError(error);
      });
  };
  console.log(wishlist);

  return (
    <Container>
      <h1 className="mb-4">Your Total Wishlist : {wishlist?.length}</h1>
      {isLoading ? (
        <HashSpinner />
      ) : (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Hotel Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Room title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {wishlist?.map((item: any) => (
                  <tr
                    key={item._id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{item.hotelName}</td>
                    <td className="px-6 py-4">{item.roomTitle}</td>
                    <td className="px-6 py-4">
                      <Button
                        size="sm"
                        onClick={() => handleDeleteWishlist(item._id)}
                      >
                        remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </Container>
  );
};

export default Wishlist;
