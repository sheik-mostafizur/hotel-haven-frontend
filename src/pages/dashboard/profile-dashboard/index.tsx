import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../../redux/hooks";
import { useUpdateProfileMutation } from "../../../api/private-api";
// import { useState } from "react";
// import Button from "../../../components/ui/button";
interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  photoURL: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
const ProfileDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [updateProfile] = useUpdateProfileMutation();
  // const [confirm, setConfirm] = useState("");

  const { handleSubmit, control, reset } = useForm<IFormInputs>({});

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    // if (data.NewPassword !== data.ConfirmNewPassword) {
    //   setConfirm("password not match");
    //   return;
    // } else {
    //   setConfirm("");
    // }
    updateProfile(data);
    // console.log(data);
    // reset();
  };

  return (
    <div>
      <h2 className="text-center">User info</h2>
      <div>
        <div>
          <img
            className="mx-auto relative w-20 h-20 lg:w-44 lg:h-44 rounded-full"
            src={user?.photoURL}
            alt="user Profile"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <label htmlFor="name">Name:</label>
            <Controller
              name="name"
              control={control}
              defaultValue={user?.name}
              rules={{ required: true }}
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="email">Email:</label>
            <Controller
              name="email"
              control={control}
              defaultValue={user?.email}
              rules={{ required: true }}
              render={({ field }) => <input type="email" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="phone">Mobile:</label>
            <Controller
              name="phone"
              control={control}
              defaultValue={user?.phone}
              rules={{ required: true }}
              render={({ field }) => <input type="number" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="photoURL">Photo:</label>
            <Controller
              name="photoURL"
              control={control}
              defaultValue={user?.photoURL}
              rules={{ required: true }}
              render={({ field }) => <input type="url" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="currentPassword">Current password:</label>
            <Controller
              name="currentPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input type="password" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="newPassword">New password</label>
            <Controller
              name="newPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input type="password" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="confirmNewPassword">Confirm new password</label>
            {/* <p className="text-red-500">
              <small>{confirm}</small>
            </p> */}
            <Controller
              name="confirmNewPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input type="password" {...field} />}
            />
          </div>
          <input type="submit" className="bg-primary-400" value="Change" />
        </form>
      </div>
    </div>
  );
};

export default ProfileDashboard;
