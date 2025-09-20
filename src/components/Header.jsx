import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import userPhoto from "../assets/user.png";

const Header = () => {
  const location = useLocation();
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
    <div className={`${location.pathname === "/" ? "bg-[#f8e968]" : ""}`}>
      <div className="navbar lg:w-[85%] mx-auto border-2 border-black w-[95%]">
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
          <Link to={`/login`} className="btn btn-primary">
            Log in
          </Link>
          <button className="btn btn-primary">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
