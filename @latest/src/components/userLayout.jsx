import { Outlet } from "react-router-dom";
import Footer from "./customersection/footer/footer";
import UserNavbar from "./usersection/userNavbar";
const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
