import { Link } from "react-router-dom";
import loginIcon from "../../assets/login.png";
const LoggedOut = () => {
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost "
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={loginIcon} />
          </div>
          <Link className="text-xl mr-3">Login/Register</Link>
        </div>
        <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <Link to={"/login"} className="justify-between">
              Login
            </Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoggedOut;
