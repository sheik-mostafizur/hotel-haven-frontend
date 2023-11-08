import {useAppSelector} from "../../../redux/hooks";

const ProfileDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <h1>ProfileDashboard</h1>
      <h2>Name: {user.name}</h2>
      <img src={user.photoURL} alt={user.name} />
    </div>
  );
};

export default ProfileDashboard;
