import generateEmptyArray from "../../../../utils/generateEmptyArray";

const HotelCardSkeleton = ({items = 10}) => {
  return (
    <>
      {generateEmptyArray(items).map((item) => (
        <div
          key={item}
          className="animate-pulse w-full flex flex-col mx-auto items-center bg-white border border-secondary-200 rounded-lg shadow md:flex-row md:max-w-4xl dark:border-secondary-800 dark:bg-secondary-800">
          <div className="object-cover w-full md:max-w-xs h-full md:h-96 rounded-t-lg md:rounded-none md:rounded-l-lg bg-primary-50"></div>
          <div className="flex flex-col flex-grow justify-between p-4 leading-normal">
            <div className="mb-2 h-7 bg-primary-50 rounded-full"></div>
            <div className="mb-3 h-6 flex items-center gap-2 font-normal text-secondary-700 dark:text-secondary-400 bg-primary-50 rounded-full"></div>
            <div className="mb-3 h-32 rounded-lg bg-primary-50 font-normal text-secondary-700 dark:text-secondary-400"></div>
            <div className="h-10 w-36 bg-primary-50 rounded-full"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HotelCardSkeleton;
