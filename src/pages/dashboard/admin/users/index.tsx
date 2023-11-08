import { useState } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { HashSpinner } from "../../../../components/spinner";
import Button from "../../../../components/ui/button";
import { RiAdminFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import ROLE from "../../../../constants/ROLE";
import {
  useEditUserAdminMutation,
  useGetUsersAdminQuery,
} from "../../../../api/admin-api";

const Users = () => {
  const admin = useAppSelector((state) => state.auth.user);
  const {
    data: users,
    isLoading,
    refetch,
  } = useGetUsersAdminQuery({
    limit: Number.MAX_SAFE_INTEGER,
    descending: true,
  });
  const [editUserAdmin] = useEditUserAdminMutation();

  const [selectedRole, setSelectedRole] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter users by role
  const filteredUsers = users?.filter((user: any) => {
    // Filter by role
    if (selectedRole !== "All" && user.role !== selectedRole) {
      return false;
    }

    // Filter by name
    if (
      searchQuery.length > 0 &&
      !user.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <>
      <div className="pb-4">
        <h2 className="text-center">Our All Users</h2>
      </div>

      <div className="flex justify-between">
        {/* Dropdown to filter users by role */}
        <div className="mb-4">
          <label htmlFor="roleFilter">Filter by Role:</label>
          <select
            id="roleFilter"
            onChange={(e) => setSelectedRole(e.target.value)}
            value={selectedRole}
          >
            <option value="All">All</option>
            <option value="ADMIN">Admin</option>
            <option value="MANAGER">Manager</option>
            <option value="CUSTOMER">Customer</option>
          </select>
        </div>

        {/* Search input for filtering by name */}
        <div className="mb-4">
          <label htmlFor="nameSearch">Search by Name:</label>
          <input
            type="text"
            id="nameSearch"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter name"
          />
        </div>
      </div>

      {isLoading ? (
        <HashSpinner />
      ) : (
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-secondary-500 dark:text-secondary-400">
              <thead className="text-xs text-secondary-700 uppercase bg-secondary-50 dark:bg-secondary-700 dark:text-secondary-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name & Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers &&
                  filteredUsers.map((user: any) => (
                    <tr
                      key={user._id}
                      className="bg-white border-b dark:bg-secondary-800 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-600"
                    >
                      <th
                        scope="row"
                        className="flex items-center px-6 py-4 text-secondary-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded-full"
                          src={user.photoURL}
                          alt={user.name}
                        />
                        <div className="pl-3">
                          <div className="text-base font-semibold">
                            {user.name}
                          </div>
                          <div className="font-normal text-secondary-500">
                            {user.email}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">{user._id}</td>
                      <td className="px-6 py-4">{user.phone}</td>
                      <td className="px-6 py-4">{user.gender}</td>
                      <td className="px-6 py-4">{user.role}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-4">
                          <Button
                            size="sm"
                            data-tooltip-id={`admin-tooltip-${user._id}`}
                            data-tooltip-content="Make a new admin"
                            data-tooltip-place="top"
                            isDisabled={
                              user.role == ROLE.ADMIN || user._id == admin._id
                            }
                            onClick={() => {
                              editUserAdmin({
                                _id: user._id,
                                data: { role: ROLE.ADMIN },
                              })
                                .unwrap()
                                .then(() => {
                                  refetch();
                                })
                                .catch((error) => {
                                  console.error(error);
                                });
                            }}
                          >
                            <Tooltip id={`admin-tooltip-${user._id}`} />

                            <RiAdminFill className="w-5 h-5" />
                          </Button>
                          <Button
                            size="sm"
                            data-tooltip-id={`manager-tooltip-${user._id}`}
                            data-tooltip-content="Make a new manager"
                            data-tooltip-place="top"
                            isDisabled={
                              user.role == ROLE.MANAGER || user._id == admin._id
                            }
                            onClick={() => {
                              editUserAdmin({
                                _id: user._id,
                                data: { role: ROLE.MANAGER },
                              })
                                .unwrap()
                                .then(() => {
                                  refetch();
                                })
                                .catch((error) => {
                                  console.error(error);
                                });
                            }}
                          >
                            <Tooltip id={`manager-tooltip-${user._id}`} />
                            <FaUserTie className="w-5 h-5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
