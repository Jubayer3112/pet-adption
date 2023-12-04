import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import PetListing from "../Pages/PetListing/PetListing";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddPet from "../Pages/Dashboard/AddPet/AddPet";
import AdoptionReq from "../Pages/Dashboard/AdoptionReq/AdoptionReq";
import MyCampaign from "../Pages/Dashboard/MyCampaign/MyCampaign";
import MyDonation from "../Pages/Dashboard/MyDonation/MyDonation";
import MyAddedPet from "../Pages/Dashboard/MyAddedPet/MyAddedPet";
import AddDonationCamp from "../Pages/Dashboard/AddDonationCamp/AddDonationCamp";
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
        loader: () => fetch("http://localhost:5000/pets"),
      },
      {
        path: "/donation",
        element: <DonationCamp />,
        loader: () => fetch("http://localhost:5000/addcampaign"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "addpet",
            element: <AddPet />,
          },
          {
            path: "myaddedpet",
            element: <MyAddedPet />,
          },
          {
            path: "addreq",
            element: <AdoptionReq />,
          },
          {
            path: "campaign",
            element: <AddDonationCamp />,
          },
          {
            path: "mycampaign",
            element: <MyCampaign />,
          },
          {
            path: "mydonation",
            element: <MyDonation />,
          },
        ],
      },
    ],
  },
]);

export default Router;
