interface Action {
  handleEvent: (id: any) => void;
  buttonStyle?: React.CSSProperties;
  color?: string;
  buttonPlaceholder?: string;
}

interface Actions {
  title: string;
  events: Action[];
}

interface Column {
  title: string;
  key: string;
}

interface TableProps {
  columns: Column[];
  data: Array<{[key: string]: any}>;
  actions?: Actions | undefined;
}

const Table: React.FC<TableProps> = ({columns, data, actions}) => {
  const columnKeys = columns.map((item) => item.key);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((column, i) => (
                <th
                  key={column.key + "_" + i}
                  scope="col"
                  className="px-6 py-3">
                  {column.title}
                </th>
              ))}
              {actions && actions.events.length > 0 && (
                <th scope="col" className="px-6 py-3">
                  {actions.title}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row._id}
                className="bg-white dark:bg-gray-800 hover-bg-gray-50 dark:hover-bg-gray-600">
                {columnKeys.map((key) => (
                  <td key={key} className="px-6 py-4">
                    {row[key]}
                  </td>
                ))}
                {actions && actions.events.length > 0 && (
                  <td scope="col" className="px-6 py-3">
                    {actions.events.map((action, index) => {
                      const buttonClasses = `px-3 py-2 me-2 text-xs font-medium text-center text-white bg-${
                        action.color || "gray"
                      }-700 rounded-lg hover-bg-${
                        action.color || "gray"
                      }-800 focus-ring-4 focus-outline-none focus-ring-${
                        action.color || "gray"
                      }-300 dark-bg-${
                        action.color || "gray"
                      }-600 dark-hover-bg-${
                        action.color || "gray"
                      }-700 dark-focus-ring-${action.color || "gray"}-800`;

                      return (
                        <button
                          key={`${action.buttonPlaceholder} ${row._id} ${index}`}
                          style={action.buttonStyle}
                          className={buttonClasses}
                          onClick={() => action.handleEvent(row._id)}>
                          {action.buttonPlaceholder || "Click"}
                        </button>
                      );
                    })}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
