import useSetTitle from "../../../hooks/useSetTitle";
import AdminChart from "./AdminChart";

const AdminHomeDashboard = () => {
  useSetTitle("Dashboard");
  return (
    <div>
      <AdminChart />
    </div>
  );
};

export default AdminHomeDashboard;
