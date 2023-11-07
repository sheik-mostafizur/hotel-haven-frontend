import { useAppSelector } from "../../../redux/hooks";

const ProfileDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="p-4 border-2 border-secondary-200 border-dashed rounded-lg dark:border-secondary-700">
      <h2>User Details</h2>
      <h3>Name: {user.name}</h3>
      <h5>Role: {user.role}</h5>
      <img width={100} src={user.photoURL} alt={user.name} />
    </div>
  );
};

export default ProfileDashboard;
