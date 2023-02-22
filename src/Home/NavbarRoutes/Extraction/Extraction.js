import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Home from "../../Home";
import "./Extraction.css";


const Extraction = () => {

  return (
    <div>
      <Home></Home>
      <div className="flex gap-5 bg-gray-100 w-full px-5 my-4 py-4 rounded-box">
        <div exact="true" activeclassname="active">
          <NavLink className="extraction-navbar px-10 mx-10" to="/extraction/runs">
           Run
          </NavLink>
        </div>
        <div exact="true" activeclassname="active">
          <NavLink className="extraction-navbar  px-10 mx-10" to="/extraction/document">
           Document
          </NavLink>
        </div>

        <div exact="true" activeclassname="active">
          <NavLink className="extraction-navbar  px-10 mx-10" to="/extraction/binder">
            Binder
          </NavLink>
        </div>
        <div exact="true" activeclassname="active">
          <NavLink className="extraction-navbar  px-10 mx-10" to="/extraction/object">
            Object
          </NavLink>
        </div>
        <div exact="true" activeclassname="active">
          <NavLink className="extraction-navbar  px-10 mx-10" to="/extraction/euFile">
            Extract Using File
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Extraction;
