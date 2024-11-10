import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerLayout from "./components/customerLayout";
import CustomerProducts from "./components/customersection/customerProducts.jsx/customerProducts";
import AboutUs from "./components/aboutUs/aboutUs";
import PrivacyPolicy from "./components/privacyPolicy/privacyPolicy";
import TermsAndConditions from "./components/termsAndConditions/termsAndConditions";
import ContactUs from "./components/contactUs/contactUs";
import UserLogin from "./components/customersection/userLogin/userLogin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/CustomerProducts",
        element: <CustomerProducts />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/TermsAndConditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/UserLogin",
        element: <UserLogin />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
