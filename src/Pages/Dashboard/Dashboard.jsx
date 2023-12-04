import { IoAddCircleOutline } from "react-icons/io5";
import { MdBookmarkAdded, MdCampaign, MdCreateNewFolder } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="container mx-auto flex gap-8">
        <div
          id="Main"
          className="rounded-r transform  translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-[100vh]  w-72 bg-gray-900 flex-col"
        >
          <div className="flex justify-start p-6 items-center space-x-3">
            <p className="text-2xl leading-6 text-white">
              <div className="flex justify-center items-center  space-x-2">
                <div>
                  <img
                    className="rounded-full w-12"
                    src={user?.photoURL}
                    alt="avatar"
                  />
                </div>
                <div className="flex justify-start flex-col items-start">
                  <p className="cursor-pointer text-sm leading-5 text-white">
                    {user?.displayName}
                  </p>
                  <p className="cursor-pointer text-xs leading-3 text-gray-300">
                    {user?.email}
                  </p>
                </div>
              </div>
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4 justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <button className="flex jusitfy-start items-center space-x-4 w-full  focus:outline-none cursor-pointer focus:text-indigo-400  text-white rounded ">
              <IoAddCircleOutline className="text-2xl" />
              <p className="text-base leading-4 ">
                <Link to={"addpet"}>Add New Pet</Link>
              </p>
            </button>

            <button className="flex jusitfy-start items-center w-full  space-x-4 focus:outline-none text-white focus:text-indigo-400 cursor-pointer  rounded ">
              <MdBookmarkAdded className="text-2xl" />
              <p className="text-base leading-4 ">
                <Link to={"myaddedpet"}>My added pets</Link>
              </p>
            </button>

            <button className="flex jusitfy-start items-center w-full  space-x-4 focus:outline-none text-white focus:text-indigo-400 cursor-pointer  rounded ">
              <FaCodePullRequest className="text-2xl" />
              <p className="text-base leading-4 ">
                {" "}
                <Link to={"addreq"}>Adoption Request</Link>{" "}
              </p>
            </button>

            <button className="flex jusitfy-start items-center w-full  space-x-4 focus:outline-none text-white focus:text-indigo-400 cursor-pointer  rounded ">
              <MdCreateNewFolder className="text-2xl" />
              <p className="text-base leading-4 ">
                <Link to={"campaign"}>Create Donation Campaign</Link>
              </p>
            </button>

            <button className="flex jusitfy-start items-center w-full  space-x-4 focus:outline-none text-white focus:text-indigo-400 cursor-pointer  rounded ">
              <MdCampaign className="text-2xl" />
              <p className="text-base leading-4 ">
                <Link to={"mycampaign"}>My Donation Campaigns</Link>
              </p>
            </button>

            <button className="flex jusitfy-start items-center w-full  space-x-4 focus:outline-none text-white focus:text-indigo-400 cursor-pointer  rounded ">
              <FaDonate className="text-2xl" />
              <p className="text-base leading-4 ">
                <Link to={"mydonation"}>My Donation</Link>
              </p>
            </button>
          </div>
          <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  "></div>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
