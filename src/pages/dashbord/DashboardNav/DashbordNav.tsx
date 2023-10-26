import {Link} from "react-router-dom";
import "./dashbord.css";
import {BiSolidUser} from "react-icons/bi";
import {
  FaUsers,
  FaQuestionCircle,
  FaHome,
  FaProductHunt,
  FaHotel,
} from "react-icons/fa";
import {AiFillSetting} from "react-icons/ai";
import {FiLogOut} from "react-icons/fi";
import {useAppSelector} from "../../../redux/hooks";
import ROLE from "../../../constants/ROLE";

const DashboardNav = () => {
  const user = useAppSelector((state) => state.auth.user);
  const userRole = user?.role;

  // const [open, setOpen] = useState(true);

  return (
    <div>
      <div>
        <nav className="side_nav flex flex-col justify-between ">
          <ul className="">
            <li>
              <Link
                to="/dashboard"
                className="text-white group flex  items-center gap-5 ">
                <span>
                  {" "}
                  <FaHome />
                </span>
                Dashbord
              </Link>
            </li>
            {userRole == ROLE.ADMIN && (
              <>
                <li>
                  <Link
                    to="profile"
                    className="navitem text-white group flex  items-center gap-5">
                    <span>
                      {" "}
                      <BiSolidUser />
                    </span>
                    <span className="">Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="users"
                    className="navitem text-white group flex  items-center gap-5">
                    <span>
                      {" "}
                      <BiSolidUser />
                    </span>
                    <span className="">All Users</span>
                  </Link>
                </li>
              </>
            )}
            {userRole == ROLE.MANAGER && (
              <>
                {/* <li className="text-center">{userRole}</li> */}
                <Link
                  to="addHotel"
                  className="text-white group flex  items-center gap-5 ">
                  <span>
                    <FaProductHunt />
                  </span>
                  <span>Add Hotel</span>
                </Link>
                <Link
                  to="clients"
                  className="text-white group flex  items-center gap-5 ">
                  <span>
                    <FaUsers />
                  </span>
                  <span>Room</span>
                </Link>
              </>
            )}
            <hr className="border-2" />
            <li>
              <Link
                to="/faq"
                className="text-white group flex  items-center gap-5 ">
                <span>
                  <FaQuestionCircle />
                </span>
                <span>FAQ</span>
              </Link>
            </li>
            <li>
              <Link
                to="/setting"
                className="text-white group flex  items-center gap-5 ">
                <span>
                  <AiFillSetting />
                </span>
                <span>Setting</span>
              </Link>
            </li>
          </ul>
          <div>
            <Link
              to="/"
              className="text-white group flex  items-center gap-10 ">
              <span>
                <FaHotel />
              </span>
              <span>Home</span>
            </Link>
            <Link
              to="/logout"
              className="text-white group flex  items-center gap-10 ">
              <span>
                <FiLogOut />
              </span>
              <span>Logout</span>
            </Link>
          </div>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardNav;
