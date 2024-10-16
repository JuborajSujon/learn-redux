import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { showUser } from "../features/userDetails/userDetailSlice";

const Navbar = () => {
  const users = useSelector((state) => state.app?.users);
  const count = users.length;

  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      // Re-fetch only if users list is empty
      dispatch(showUser());
    }
  }, [dispatch, users.length]);
  const navList = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-900 dark:text-green-400 border-b-4 border-green-400 hover:border-slate-300"
              : "hover:text-slate-900 hover:bg-green-400 dark:text-green-400 dark:hover:text-slate-900"
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-user"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-900 dark:text-green-400 border-b-4 border-green-400 hover:border-slate-300"
              : "hover:text-slate-900 hover:bg-green-400 dark:text-green-400 dark:hover:text-slate-900"
          }>
          All Post ({count})
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create-user"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-900 dark:text-green-400 border-b-4 border-green-400 hover:border-slate-300"
              : "hover:text-slate-900 hover:bg-green-400 dark:text-green-400 dark:hover:text-slate-900"
          }>
          Create Post
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-[1540px] fixed  z-10 bg-white dark:bg-slate-900 dark:text-slate-300 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost min-h-9 h-9 px-2  md:hidden hover:bg-green-500 hover:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="2 2 20 20"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
            {navList}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost hover:bg-stone-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-bold  min-h-10 h-12 -ml-2 ">
          <p className="hover:text-green-400">Identity</p>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal text-sm font-semibold px-1 space-x-2">
          {navList}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <form className="flex space-x-2">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered input-success w-full min-h-8 h-8 sm:min-h-10 sm:h-10 max-w-xs focus-visible:border-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
