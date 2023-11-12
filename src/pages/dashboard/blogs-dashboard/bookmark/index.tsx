import {Link} from "react-router-dom";
import {useGetBlogBookmarkQuery} from "../../../../api/private-api";
import Button from "../../../../components/ui/button";

const Bookmark = () => {
  const {data} = useGetBlogBookmarkQuery(undefined);

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
          {data?.map((item: any) => (
            <tr
              key={item._id}
              // className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td className="px-6 py-4">
                <img src={item.blogThumbnail} className="w-20" alt="" />
              </td>
              <td className="px-6 py-4">{item.blogTitle}</td>
              <td>
                <Link to={`/blogs/${item.blogId}`}>
                  <Button>Read</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookmark;
