import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const isAuth = true;
  const activeStyles = {
    color: "white",
  };

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
        E
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              className="text-xs text-gray-400 hover:text-white"
              href="/"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/posts"}
              className="text-xs text-gray-400 hover:text-white"
              href="/"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              My Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new"}
              className="text-xs text-gray-400 hover:text-white"
              href="/"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Add Posts
            </NavLink>
          </li>
        </ul>
      )}
      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? <button>Exit</button> : <Link to={"/login"}>Enter</Link>}
      </div>
    </div>
  );
};
