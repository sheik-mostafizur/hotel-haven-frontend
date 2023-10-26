
import { Outlet } from 'react-router-dom'

import DashHeader from '../Header/Header'
import DashbordNav from '../DashbordNav/DashbordNav';

const Dashbordlayout = () => {



    return (
        <div className=' flex gap-4 lg:container  mx-auto bg-white'>

            <div className='sidenav bg-primary-700  overflow-hidden'>
                <DashbordNav />
            </div >
            <div className=' w-full  flex flex-col gap-1 overflow-y-scroll h-screen'>
                <DashHeader />
                <Outlet />
            </div>
        </div >
    );
};

export default Dashbordlayout;