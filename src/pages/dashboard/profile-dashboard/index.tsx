import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../../redux/hooks";
import Button from "../../../components/ui/button";
import { AiFillCamera } from "react-icons/ai";
import Modal from "../../../components/ui/modal";
interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  CurrentPassword: string;
  NewPassword: string;
  ConfirmNewPassword: string;
}
const ProfileDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);

  const { name, email, photoURL, phone } = user;
  const { handleSubmit, control, reset } = useForm<IFormInputs>({});

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  const photoSave = (e: any): any => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photoURL.value;
  };

  return (
    <div>
      <h2 className="text-center">User info</h2>
      <div>
        <div>
          <img
            className="mx-auto relative w-20 lg:w-32 rounded-full"
            src={photoURL}
            alt="user Profile"
          />
          <Modal
            title="Change user profile"
            button={{
              label: "Change Photo",
              className: "block mx-auto my-2",
            }}
          >
            <div className="my-2">
              <form onSubmit={photoSave}>
                <label htmlFor="photoURL">PhotoURL:</label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Paste your profile url"
                />
                <input
                  type="submit"
                  className="bg-primary-400 my-2 cursor-pointer"
                  value="save"
                />
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
            <label htmlFor="phone">Mobile:</label>
            <Controller
              name="phone"
              control={control}
              disabled
              defaultValue={phone}
              rules={{ required: true }}
              render={({ field }) => <input type="number" {...field} />}
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
