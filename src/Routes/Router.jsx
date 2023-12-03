import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCamp from "../Pages/DonationCampaign/DonationCamp";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listing",
        element: <PetListing />,
      },
      {
        path: "/donation",
        element: <DonationCamp />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
]);

export default Router;
