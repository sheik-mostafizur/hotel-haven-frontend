import {useGetBlogBookmarkQuery} from "../../../../api/private-api";

const Bookmark = () => {
  const {data, isLoading} = useGetBlogBookmarkQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>Bookmark</h1>
    </div>
  );
};

export default Bookmark;
