import {useEffect, useState} from "react";
import Button from "../../../components/ui/button";
import {
  deleteUserData,
  editUserData,
  fetchUserData,
} from "../../../redux/adminSlice/adminSlice";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import ROLE from "../../../constants/ROLE";
import {AiFillDelete} from "react-icons/ai";
import {FcManager} from "react-icons/fc";
import {RiAdminFill} from "react-icons/ri";
import {Tooltip} from "react-tooltip";

const Users = () => {
  const admin = useAppSelector((state) => state.auth.user);

  const loadedUsers = useAppSelector((state) => state.admin.users);
  const isLoading = useAppSelector((state) => state.admin.isLoading);

  const [users, setUsers] = useState<any>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    setUsers(loadedUsers);
  }, [loadedUsers]);

  const handleChange = (e: any) => {
    const search = e.target.value;
    const result = loadedUsers.filter((user) => {
      const nameMatch = user.name.toLowerCase().includes(search.toLowerCase());
      const emailMatch = user.email
        .toLowerCase()
        .includes(search.toLowerCase());
      return nameMatch || emailMatch;
    });
    setUsers(result);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} placeholder="Search User" />
      </form>
      <ul className="text-primary-500 flex flex-col justify-center items-center rounded-xl border ">
        {isLoading ? (
          <h1 className="text-3xl">Loading...</h1>
        ) : (
          users &&
          users.map((user: any, idx: any) => (
            <div
              className="flex justify-between border w-3/4  p-4 gap-4 shadow-xl mt-5"
              key={idx}>
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <div>
                <p className="text-xl font-semibold">{user.name}</p>
                <p>{user.email}</p>
              </div>
              <div className=" ">
                <Button
                  data-tooltip-id={`admin-tooltip-${user._id}`}
                  data-tooltip-content="Make a new admin"
                  data-tooltip-place="top"
                  isDisabled={user.role == ROLE.ADMIN || user._id == admin._id}
                  onClick={() => {
                    dispatch(
                      editUserData({
                        _id: user._id,
                        updatedData: {role: ROLE.ADMIN},
                      })
                    ).then(() => {
                      dispatch(fetchUserData());
                    });
                  }}
                  className="me-2"
                  size="sm">
                  <RiAdminFill className="text-xl" />
                  <Tooltip id={`admin-tooltip-${user._id}`} />
                </Button>

                <Button
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
                  }}
                  className="me-2"
                  size="sm">
                  <FcManager className="text-xl" />
                  <Tooltip id={`manager-tooltip-${user._id}`} />
                </Button>
                <Button
                  data-tooltip-id={`delete-tooltip-${user._id}`}
                  data-tooltip-content="Delete a user"
                  data-tooltip-place="top"
                  isDisabled={user._id == admin._id}
                  onClick={() => {
                    dispatch(deleteUserData({_id: user._id})).then(() => {
                      dispatch(fetchUserData());
                    });
                  }}
                  className="me-2"
                  size="sm">
                  <AiFillDelete className="text-xl" />
                  <Tooltip id={`delete-tooltip-${user._id}`} />
                </Button>
              </div>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Users;
