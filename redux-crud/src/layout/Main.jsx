import { Outlet } from "react-router-dom";
import useScrollPosition from "../hook/useScrollPosition";

const Main = () => {
  useScrollPosition();
  return (
    <div className="font-poppins">
      <h2>Navbar</h2>

      <div className="dark:bg-slate-800 min-h-[calc(100vh-110px)] overflow-x-hidden">
        <Outlet />
      </div>

      <h2>Footer</h2>
    </div>
  );
};

export default Main;
