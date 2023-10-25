
import { Link, Outlet } from 'react-router-dom'
import './dashbord.css'
import { BiSolidUser } from 'react-icons/bi'
import { FaUsers, FaQuestionCircle, FaHome } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import DashHeader from '../Header/Header'
import { useState } from 'react'
const Dashbordlayout = () => {
    const [open, setOpen] = useState(true)


    return (
        <div className=' flex  bg-white'>

            <div className='sidenav bg-primary-700  overflow-hidden'>

                <nav className='side_nav flex flex-col justify-between '>
                    <ul className=''>
                        <li>
                            <Link
                                to="/dashbord"
                                className="text-white group flex  items-center gap-5 "
                            >
                                <span> <FaHome /></span>
                                Dashbord
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className="navitem text-white group flex  items-center gap-5"
                            >
                                <span> <BiSolidUser /></span>
                                <span className=''>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <div onClick={() => setOpen(!open)} id='allusers'

                                className="text-white group flex cursor-pointer  items-center gap-5 ms-1 "
                            >
                                <span><FaUsers /></span>
                                <span>All Users</span>
                            </div>
                        </li>
                        <div className={`flex  ${open ? "hidden" : ''}  ms-10 flex-col`}>
                            <Link
                                to="modaretor"
                                className="text-white group flex  items-center text-lg gap-5 "
                            >
                                <span>Mordaretor</span>
                            </Link>
                            <Link
                                to="users"
                                className="text-white group flex  items-center text-lg gap-5 "
                            >
                                <span>Users</span>
                            </Link>
                        </div>
                        <li>
                            <Link
                                to="/faq"
                                className="text-white group flex  items-center gap-5 "
                            >
                                <span><FaQuestionCircle /></span>
                                <span>FAQ</span>

                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/setting"
                                className="text-white group flex  items-center gap-5 "
                            >
                                <span><AiFillSetting /></span>
                                <span>Setting</span>
                            </Link>
                        </li>

                    </ul>
                    <div>
                        <Link
                            to="/logout"
                            className="text-white group flex  items-center gap-10 "
                        >
                            <span><FiLogOut /></span>
                            <span>Logout</span>
                        </Link>
                    </div>
                </nav>
            </div >
            <div className=' w-full  flex flex-col gap-1'>
                <DashHeader />
                <Outlet />
            </div>
        </div >
    );
};

export default Dashbordlayout;