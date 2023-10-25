
import { Link } from 'react-router-dom'
import './dashbord.css'
import { BiSolidUser } from 'react-icons/bi'
import { FaUsers, FaQuestionCircle, FaHome, FaProductHunt, FaHotel } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { useState } from 'react'

const DashbordNav = () => {
    const [open, setOpen] = useState(true)
    const admin = false;
    const mordaretor = true;
    return (
        <div>
            <div>
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
                        {
                            admin && <>
                                <li>
                                    <Link
                                        to="profile"
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
                                <li>
                                    <Link
                                        to="add-hotel"
                                        className="text-white group flex cursor-pointer  items-center gap-5 ms-1 "
                                    >
                                        <span> <FaHotel />  </span>
                                        <span>Add Hotel</span>
                                    </Link>
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
                            </>
                        }
                        {
                            mordaretor && <>
                                <Link
                                    to="add-product"
                                    className="text-white group flex  items-center gap-5 "
                                >
                                    <span><FaProductHunt /></span>
                                    <span>Add Product</span>

                                </Link>
                                <Link
                                    to="clients"
                                    className="text-white group flex  items-center gap-5 "
                                >
                                    <span><FaUsers /></span>
                                    <span>Client List</span>

                                </Link>
                            </>
                        }

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
            </div>
            <div>

            </div>
        </div>
    );
};

export default DashbordNav;