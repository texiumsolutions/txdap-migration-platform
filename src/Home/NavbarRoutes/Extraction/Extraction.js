import React from "react";
import { Link } from "react-router-dom";
import Home from "../../Home";
import "./Extraction.css";


const Extraction = () => {
  return (
    <div>
      <Home></Home>
      <div class=" flex bg-gray-100 w-full px-5 my-4 py-4 rounded-box">
        <div >
          <Link class="extraction-navbar" to="/eprofile">
            Extraction Profile
          </Link>
        </div>

        <div>
          <Link class="extraction-navbar" to="/runs">
            Run Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Extraction;
