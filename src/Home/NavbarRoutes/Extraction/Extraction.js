import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Home from "../../Home";
import "./Extraction.css";


const Extraction = () => {

  return (
    <div>
      <Home></Home>
      <div className="flex gap-5 bg-gray-100 w-full px-5 my-4 py-4 rounded-box">
        <div exact activeClassName="active">
          <NavLink className="extraction-navbar" to="/extraction/eprofile">
            Extraction Profile
          </NavLink>
        </div>

        <div exact activeClassName="active">
          <NavLink className="extraction-navbar" to="/extraction/runs">
            Run Profile
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
