import { Link } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import LoggedIn from "../../components/LoggedIn/LoggedIn";
import LoggedOut from "../../components/LoggedOut/LoggedOut";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navigation = () => {
  const { user } = useContext(AuthContext);
  const menuItem = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/listing"}>Pet Listing</Link>
      </li>
      <li>
        <Link to={"/donation"}>Donation Campaign</Link>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="navbar py-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
                {menuItem}
              </ul>
            </div>
            <a className="">
              <img src={logo} />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">{menuItem}</ul>
          </div>

          <div className="navbar-end">
            {user ? <LoggedIn /> : <LoggedOut />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
