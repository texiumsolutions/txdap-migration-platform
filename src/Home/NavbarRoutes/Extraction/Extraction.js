import React from "react";
import { Link } from "react-router-dom";
import Home from "../../Home";
import "./Extraction.css";

const Extraction = () => {
  return (
    <div>
      <Home></Home>
      <div class=" flex bg-gray-100 w-screen px-10 my-4 py-4 rounded-box">
        <div exact activeClassName="active">
          <Link class=" extraction-navbar" to="/eprofile">
            Extraction Profile
          </Link>
        </div>

        <div exact activeClassName="active">
          <Link class=" extraction-navbar" to="/informations">
            Run Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Extraction;
