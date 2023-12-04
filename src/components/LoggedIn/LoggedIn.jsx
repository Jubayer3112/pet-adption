import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LoggedIn = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => console.log("logged out"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img src={user.photoURL} />
          </div>
        </div>
        <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <Link to={"/dashboard"} className="justify-between">Dashboard</Link>
          </li>
          <li onClick={handleSignOut}>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoggedIn;
