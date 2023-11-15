import {useAppSelector} from "../../../redux/hooks";

const CustomerHomeDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="bg-primary-100 p-8 rounded-lg text-center">
      <h1 className="text-3xl text-primary-600 mb-4">
        Welcome to Your Peaceful Space, {user.name}
      </h1>
      <p className="text-secondary-600 text-lg">
        Take a moment to relax and explore. Your journey with us is filled with
        tranquility and simplicity.
      </p>
    </div>
  );
};

export default CustomerHomeDashboard;
