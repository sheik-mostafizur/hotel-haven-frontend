import { useGetBlogBookmarkQuery } from "../../../../api/private-api";
import Button from "../../../../components/ui/button";

const Bookmark = () => {
  const { data, isLoading } = useGetBlogBookmarkQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>Bookmark</h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              title
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="px-6 py-4">
              <img src="" alt="" />
            </td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">
              <Button size="sm">Read</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bookmark;
