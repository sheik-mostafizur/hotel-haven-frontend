import {Outlet} from "react-router-dom";

import DashHeader from "../Header/Header";
import DashboardNav from "../DashboardNav/DashbordNav";

const DashboardLayout = () => {
  return (
    <div className=" flex gap-4  mx-auto bg-white">
      <div className="sidenav bg-primary-500  overflow-hidden">
        <DashboardNav />
      </div>
      <div className=" w-full  flex flex-col gap-1 overflow-y-scroll h-screen">
        <DashHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
