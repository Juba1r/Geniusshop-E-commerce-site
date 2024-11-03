import CustomerNavbar from "../components/customersection/customerNavbar/customerNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/customersection/footer/footer";
const CustomerLayout = () => {
  return (
    <>
      <CustomerNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default CustomerLayout;
