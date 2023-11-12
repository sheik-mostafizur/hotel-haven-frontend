interface PaginationProps {
  totalPages?: number;
  currentPage?: number;
  handlePages?: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages = 1,
  currentPage = 1,
  handlePages = () => {},
  className = "",
}) => {
  const generatePagesArray = (pages = 1) => {
    const pagesArr = [];
    for (let i = 1; i <= pages; i++) {
      pagesArr.push(i);
    }
    return pagesArr;
  };

  const pageStyle =
    "flex items-center justify-center px-3 lg:px-4 h-8 lg:h-10 leading-tight text-secondary-500 bg-white border border-secondary-300 hover:bg-secondary-100 hover:text-secondary-700 dark:bg-secondary-800 dark:border-secondary-700 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:hover:text-white";
  const activePageStyle =
    "flex items-center justify-center px-3 lg:px-4 h-8 lg:h-10 text-primary-600 border border-secondary-300 bg-primary-50 hover:bg-primary-100 hover:text-primary-700 dark:border-secondary-700 dark:bg-secondary-600 dark:text-white";

  const pages = generatePagesArray(totalPages);

  return (
    <nav className={`mx-auto text-center ${className}`}>
      <ul className="inline-flex -space-x-px text-sm lg:text-base lg:h-10">
        <li>
          <button
            onClick={() => {
              if (currentPage > 1) {
                const prev = currentPage - 1;
                handlePages(prev);
              }
            }}
            className="flex items-center justify-center px-3 lg:px-4 h-8 lg:h-10 ms-0 leading-tight text-secondary-500 bg-white border border-e-0 border-secondary-300 rounded-s-lg hover:bg-secondary-100 hover:text-secondary-700 dark:bg-secondary-800 dark:border-secondary-700 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:hover:text-white">
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePages(page)}
              className={currentPage == page ? activePageStyle : pageStyle}>
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              if (totalPages > currentPage) {
                const next = currentPage + 1;
                handlePages(next);
              }
            }}
            className="flex items-center justify-center px-3 lg:px-4 h-8 lg:h-10 leading-tight text-secondary-500 bg-white border border-secondary-300 rounded-e-lg hover:bg-secondary-100 hover:text-secondary-700 dark:bg-secondary-800 dark:border-secondary-700 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:hover:text-white">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
