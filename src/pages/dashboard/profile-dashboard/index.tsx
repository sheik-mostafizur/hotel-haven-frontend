import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../../redux/hooks";
import Button from "../../../components/ui/button";
import { AiFillCamera } from "react-icons/ai";
import Modal from "../../../components/ui/modal";
interface IFormInputs {
  name: string;
  email: string;
  CurrentPassword: string;
  NewPassword: string;
  ConfirmNewPassword: string;
}
const ProfileDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);

  const { name, email, photoURL } = user;
  const { handleSubmit, control, reset } = useForm<IFormInputs>({});

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };
  // console.log(user);
  return (
    <div>
      <h2 className="text-center">User info</h2>
      <div>
        <div className="">
          <img
            className="mx-auto relative w-20 lg:w-32 rounded-full"
            src={photoURL}
            alt="user Profile"
          />
          {/* <button className="btn flex gap-2 items-center mx-auto">
            <AiFillCamera /> change picture
          </button> */}
          <Modal
            title="Change user profile"
            button={{
              label: "Change Photo",
              className: "block mx-auto my-2",
            }}
          >
            <div className="my-2">
              <form>
                <label htmlFor="photoURL">PhotoURL:</label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Paste your profile url"
                />
                <div className="my-1 text-center">
                  <Button>Save</Button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2">
            <label htmlFor="name">Name:</label>
            <Controller
              name="name"
              control={control}
              defaultValue={name}
              rules={{ required: true }}
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="email">Email:</label>
            <Controller
              name="email"
              control={control}
              disabled
              defaultValue={email}
              rules={{ required: true }}
              render={({ field }) => <input type="email" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="CurrentPassword">Current password:</label>
            <Controller
              name="CurrentPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input type="password" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="NewPassword">New password</label>
            <Controller
              name="NewPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input type="password" {...field} />}
            />
          </div>
          <div className="my-2">
            <label htmlFor="ConfirmNewPassword">Confirm new password</label>
            <Controller
              name="ConfirmNewPassword"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <input type="password" {...field} />}
            />
          </div>
          <div className="text-center my-2">
            <Button>Change</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDashboard;
