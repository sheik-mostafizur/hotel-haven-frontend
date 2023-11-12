import generateEmptyArray from "../../../../utils/generateEmptyArray";

const BlogCardSkeleton = ({items = 10}) => {
  return (
    <>
      {generateEmptyArray(items).map((item) => (
        <div
          key={item}
          className="animate-pulse bg-white border border-secondary-200 rounded-lg shadow dark:bg-secondary-700 dark:border-secondary-600">
          <div className="rounded-t-lg w-full h-72 bg-primary-50"></div>
          <div className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-md mb-2 w-full h-12 bg-primary-50"></div>
              <div className="rounded-md mb-2 w-12 h-12 bg-primary-50"></div>
            </div>
            <div className="rounded-md mb-2 w-full h-28 bg-primary-50"></div>
            <div className="py-2 flex justify-between items-center">
              <div className="group flex gap-2 justify-center items-center">
                <div className="rounded-full w-9 h-9 bg-primary-50"></div>

                <div className="flex flex-col ">
                  <div className="mb-1 rounded-md w-full min-w-[100px] h-6 bg-primary-50"></div>
                  <div className="rounded-md w-full min-w-[100px] h-4 bg-primary-50"></div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="rounded-md w-12  h-12 bg-primary-50"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCardSkeleton;
