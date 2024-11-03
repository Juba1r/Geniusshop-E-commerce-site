import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerLayout from "./components/customerLayout";
import CustomerProducts from "./components/customersection/customerProducts.jsx/customerProducts";
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
