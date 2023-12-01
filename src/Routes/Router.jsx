import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCamp from "../Pages/DonationCampaign/DonationCamp";

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
    ],
  },
]);

export default Router;
