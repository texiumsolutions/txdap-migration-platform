import React from "react";
import { AiFillFileAdd, AiFillSetting } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Home from "../Home";

const HomeNav = () => {
  return (
    <div>
      <Home></Home>
      
      <div className="flex">
        <div
          tabindex="0"
          className=" bg-blue-800 h-screen p-2"
        >
          <NavLink to="/home/house" className=" text-white mx-2 pt-12 pb-4 text-2xl">
            <FaHome></FaHome>
          </NavLink>
          <NavLink to="/home/allinformation" className=" text-white mx-2 pt-4 pb-4 text-2xl">
            <AiFillFileAdd></AiFillFileAdd>
          </NavLink>
          <NavLink to="/home/settings" className=" text-white mx-2 pt-4 text-2xl">
            <AiFillSetting></AiFillSetting>
          </NavLink>
        </div>
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default HomeNav;
