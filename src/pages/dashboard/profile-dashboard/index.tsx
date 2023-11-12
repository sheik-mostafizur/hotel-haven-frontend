import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useAppSelector} from "../../../redux/hooks";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../api/private-api";
import {BeatSpinner, HashSpinner} from "../../../components/spinner";
import Button from "../../../components/ui/button";
import toastError from "../../../utils/toast-error";
import toastSuccess from "../../../utils/toast-success";
// import { useState } from "react";
// import Button from "../../../components/ui/button";
interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  photoURL: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
const ProfileDashboard = () => {
  const {data: user, isLoading} = useGetProfileQuery(undefined);

  const [updateProfile, {isLoading: updateIsLoading}] =
    useUpdateProfileMutation();

  const {
    handleSubmit,
    control,
    watch,
    formState: {errors},
  } = useForm<IFormInputs>({});

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const updatedData: any = {};
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined) {
        updatedData[key] = value;
      }
    }
    updateProfile(updatedData)
      .unwrap()
      .then((data) => {
        toastSuccess(data.message);
      })
      .catch(({data}) => {
        const error = {message: data?.message};
        toastError(error);
      });
  };

  if (isLoading) return <HashSpinner />;

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
              render={({field}) => <input {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="phone">Phone:</label>
            <Controller
              name="phone"
              control={control}
              defaultValue={user?.phone}
              render={({field}) => <input type="number" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="photoURL">Photo:</label>
            <Controller
              name="photoURL"
              control={control}
              defaultValue={user?.photoURL}
              render={({field}) => <input type="url" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="oldPassword">Current password:</label>
            <Controller
              name="oldPassword"
              control={control}
              render={({field}) => <input type="password" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="newPassword">New password</label>
            <Controller
              name="newPassword"
              control={control}
              rules={{
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
                },
              }}
              render={({field}) => <input type="password" {...field} />}
            />
            {errors.newPassword && (
              <p
                className="text-sm text-red-500 dark:text-red-500"
                role="alert">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="confirmPassword">Confirm password</label>
            {/* <p className="text-red-500">
              <small>{confirm}</small>
            </p> */}
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                validate: (value: string) =>
                  value === watch("newPassword") || "Passwords do not match",
              }}
              render={({field}) => <input type="password" {...field} />}
            />
          </div>

          <Button type="submit" className="block mx-auto min-w-[250px]">
            {updateIsLoading ? <BeatSpinner /> : "Change Profile"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDashboard;
