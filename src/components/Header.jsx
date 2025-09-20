import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import userPhoto from "../assets/user.png";

const Header = () => {
  const list = (
    <>
      <li>
        <NavLink to={``}>Home</NavLink>
      </li>
      <li>
        <NavLink>Find Jobs</NavLink>
      </li>
      <li>
        <NavLink>Companies</NavLink>
      </li>
      <li>
        <NavLink>Career Mentoring</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar lg:w-[85%] mx-auto w-[95%] mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <img className="rounded-full" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to={`/profile`}>
            {" "}
            <img className="rounded-full" src={userPhoto} alt="" />
          </Link>
          <Link
            to={`/login`}
            className="bg-[#061767] text-white border-2 border-[#061767] px-4 py-2 rounded-[4px] font-semibold hover:bg-white hover:text-[#061767] duration-500 cursor-pointer "
          >
            Log in
          </Link>
          <button className="bg-[#061767] text-white border-2 border-[#061767] px-4 py-2 rounded-[4px] font-semibold hover:bg-white hover:text-[#061767] duration-500 cursor-pointer ">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
