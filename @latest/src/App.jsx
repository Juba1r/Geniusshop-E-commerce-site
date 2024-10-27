import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerNavbar from "./components/customersection/customerNavbar/customerNavbar";
import Home from "./components/Home/home";
function App() {
  return (
    <>
      <CustomerNavbar />
      <Home />
    </>
  );
}

export default App;
