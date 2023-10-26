import { FaBars, FaSearch } from "react-icons/fa";
import './Header.css'
import { Link } from "react-router-dom";

const DashHeader = () => {
    return (
        <div className="flex  rounded-xl  justify-between shadow border mt-4 h-[80px]  bg-white px-10 py-2 ms-10 me-8 ">
            <div className=" flex justify-center items-center">
                <div className="text-2xl">
                    <FaBars onClick={() => console.log('clicked')} />
                </div>
                <Link to="/" className="flex items-center">
                    <img
                        src="/image/logo without background.png"
                        className="h-16 bg-cover"
                        alt="Hotel Haven Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Hotel Haven
                    </span>
                </Link>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center gap-5">
                    <FaSearch className='text-2xl' />
                    <input type="text" placeholder="search" />
                </div>
                <div>
                    <img className="w-16 h-1w-16 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default DashHeader;
/* 
dashbord 
users
modarator


*/

