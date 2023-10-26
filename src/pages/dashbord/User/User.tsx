import {useEffect} from "react";
import Button from "../../../components/ui/button";
import {
  deleteUserData,
  editUserData,
  fetchUserData,
} from "../../../redux/adminSlice/adminSlice";
import {useDispatch, useSelector} from "react-redux";
import {role} from "../../../constants/role";

const Users = () => {
  const admin = useSelector((state) => state.auth.user);

  const users = useSelector((state) => state.admin.users);
  const isLoading = useSelector((state) => state.admin.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <ul className="text-primary-500 flex flex-col justify-center items-center rounded-xl border ">
        {isLoading ? (
          <h1 className="text-3xl">Loading...</h1>
        ) : (
          users &&
          users.map((user, idx) => (
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
                  isDisabled={user.role == role.ADMIN || user._id == admin._id}
                  onClick={() => {
                    dispatch(
                      editUserData({
                        _id: user._id,
                        updatedData: {role: role.ADMIN},
                      })
                    ).then(() => {
                      dispatch(fetchUserData());
                    });
                  }}
                  className="me-2"
                  size="sm">
                  Make Admin{" "}
                </Button>
                <Button
                  isDisabled={
                    user.role == role.MANAGER || user._id == admin._id
                  }
                  onClick={() => {
                    dispatch(
                      editUserData({
                        _id: user._id,
                        updatedData: {role: role.MANAGER},
                      })
                    ).then(() => {
                      dispatch(fetchUserData());
                    });
                  }}
                  className="me-2"
                  size="sm">
                  Make Manager
                </Button>
                <Button
                  isDisabled={user._id == admin._id}
                  onClick={() => {
                    dispatch(deleteUserData(user._id)).then(() => {
                      dispatch(fetchUserData());
                    });
                  }}
                  className="me-2"
                  size="sm">
                  Delete
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
