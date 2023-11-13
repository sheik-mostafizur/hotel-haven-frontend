import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../api/private-api";
import { BeatSpinner, HashSpinner } from "../../../components/spinner";
import Button from "../../../components/ui/button";
import toastError from "../../../utils/toast-error";
import toastSuccess from "../../../utils/toast-success";
import SetTitle from "../../../components/set-title";
import Modal from "../../../components/ui/modal";

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
  const { data: user, isLoading } = useGetProfileQuery(undefined);

  const [updateProfile, { isLoading: updateIsLoading }] =
    useUpdateProfileMutation();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
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
      .catch(({ data }) => {
        const error = { message: data?.message };
        toastError(error);
      });
  };

  if (isLoading) return <HashSpinner />;

  return (
    <div>
      <SetTitle title="Update Your Profile" />
      <h2 className="text-center">User info</h2>
      <div>
        <div className="my-4 text-center">
          <img
            className="mx-auto relative w-20 h-20 lg:w-44 lg:h-44 rounded-full"
            src={user?.photoURL}
            alt="user Profile"
          />
          <h3 className="my-2">{user?.name}</h3>
          <h3>{user?.email}</h3>
        </div>
        <hr />
        <div className="text-center my-2">
          <div className="flex gap-4 items-center justify-center">
            <p className="font-medium w-32">Name:</p>
            <p className="w-32">{user?.name}</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <p className="font-medium w-32">Email:</p>
            <p className="w-32">{user?.email}</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <p className="font-medium w-32">Phone:</p>
            <p className="w-32">{user?.phone}</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <p className="font-medium w-32">Age: </p>
            <p className="w-32">{user?.age}</p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <p className="font-medium w-32">Gender: </p>
            <p className="w-32">{user?.gender}</p>
          </div>
        </div>
        <Modal
          title="Edit Profile Info"
          button={{ label: "Change Info", className: "block mx-auto" }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-2">
              <label htmlFor="name">Name:</label>
              <Controller
                name="name"
                control={control}
                defaultValue={user?.name}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div className="my-2">
              <label htmlFor="phone">Phone:</label>
              <Controller
                name="phone"
                control={control}
                defaultValue={user?.phone}
                render={({ field }) => (
                  <input type="number" maxLength={11} {...field} />
                )}
              />
            </div>
            <div className="my-2">
              <label htmlFor="photoURL">Photo:</label>
              <Controller
                name="photoURL"
                control={control}
                defaultValue={user?.photoURL}
                render={({ field }) => <input type="url" {...field} />}
              />
            </div>
            <div className="my-2">
              <label htmlFor="oldPassword">Current password:</label>
              <Controller
                name="oldPassword"
                control={control}
                render={({ field }) => <input type="password" {...field} />}
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
                render={({ field }) => <input type="password" {...field} />}
              />
              {errors.newPassword && (
                <p
                  className="text-sm text-red-500 dark:text-red-500"
                  role="alert"
                >
                  {errors.newPassword.message}
                </p>
              )}
            </div>
            <div className="my-2">
              <label htmlFor="confirmPassword">Confirm password</label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  validate: (value: string) =>
                    value === watch("newPassword") || "Passwords do not match",
                }}
                render={({ field }) => <input type="password" {...field} />}
              />
              {errors.confirmPassword && (
                <p
                  className="text-sm text-red-500 dark:text-red-500"
                  role="alert"
                >
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              isDisabled={updateIsLoading}
              className="block mx-auto min-w-[250px]"
            >
              {updateIsLoading ? <BeatSpinner /> : "Save "}
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileDashboard;
