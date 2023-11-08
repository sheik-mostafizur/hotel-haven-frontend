import ROLE from "../../../constants/ROLE";
import {useAppSelector} from "../../../redux/hooks";
import AdminHomeDashboard from "./AdminHomeDashboard";
import CustomerHomeDashboard from "./CustomerHomeDashboard";
import ManagerHomeDashboard from "./ManagerHomeDashboard";

const HomeDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <h1>HomeDashboard</h1>
      {user.role === ROLE.CUSTOMER && <CustomerHomeDashboard />}
      {user.role === ROLE.MANAGER && <ManagerHomeDashboard />}
      {user.role === ROLE.ADMIN && <AdminHomeDashboard />}
    </>
  );
};

export default HomeDashboard;
