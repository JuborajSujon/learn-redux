import { Outlet } from "react-router-dom";
import useScrollPosition from "../hook/useScrollPosition";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  useScrollPosition();
  return (
    <div className="font-poppins">
      <Navbar />

      <div className="dark:bg-slate-800 min-h-[calc(100vh-110px)] overflow-x-hidden">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
