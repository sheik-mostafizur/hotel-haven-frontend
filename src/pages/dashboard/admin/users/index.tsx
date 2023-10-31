import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {
  deleteUserData,
  editUserData,
  fetchUserData,
} from "../../../../redux/adminSlice/adminSlice";
import {HashSpinner} from "../../../../components/spinner";
import {AiFillDelete} from "react-icons/ai";
import Button from "../../../../components/ui/button";
import {RiAdminFill} from "react-icons/ri";
import {FaUserTie} from "react-icons/fa";
import {Tooltip} from "react-tooltip";
import ROLE from "../../../../constants/ROLE";

const Users = () => {
  const admin = useAppSelector((state) => state.auth.user);
  const adminState = useAppSelector((state) => state.admin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <>
      <div className="pb-4">
        <h2 className="text-center">Our All users</h2>
      </div>
      {adminState.isLoading ? (
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
                {adminState.users.map((user) => (
                  <tr
                    key={user._id}
                    className="bg-white border-b dark:bg-secondary-800 dark:border-secondary-700 hover:bg-secondary-50 dark:hover:bg-secondary-600">
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-secondary-900 whitespace-nowrap dark:text-white">
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
                            dispatch(
                              editUserData({
                                _id: user._id,
                                updatedData: {role: ROLE.ADMIN},
                              })
                            ).then(() => {
                              dispatch(fetchUserData());
                            });
                          }}>
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
                            dispatch(
                              editUserData({
                                _id: user._id,
                                updatedData: {role: ROLE.MANAGER},
                              })
                            ).then(() => {
                              dispatch(fetchUserData());
                            });
                          }}>
                          <Tooltip id={`manager-tooltip-${user._id}`} />
                          <FaUserTie className="w-5 h-5" />
                        </Button>
                        <button
                          className="text-red-500"
                          disabled={
                            user.role == ROLE.MANAGER || user._id == admin._id
                          }
                          onClick={() => {
                            dispatch(deleteUserData({_id: user._id})).then(
                              () => {
                                dispatch(fetchUserData());
                              }
                            );
                          }}>
                          <AiFillDelete className="w-5 h-5" />
                        </button>
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
