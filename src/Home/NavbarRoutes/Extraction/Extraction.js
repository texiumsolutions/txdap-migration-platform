import React from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "../../Home";
import "./Extraction.css";

const Extraction = () => {
  return (
    <div>
      <Home></Home>
      <div className="flex bg-gray-100 w-full px-5 my-4 py-4 rounded-box">
        <div>
          <Link className="extraction-navbar" to="/extraction/eprofile">
            Extraction Profile
          </Link>
        </div>

        <div>
          <Link className="extraction-navbar" to="/extraction/runs">
            Run Profile
          </Link>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Extraction;
