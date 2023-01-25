import React from "react";
import useInformation from "../../../Hooks/useInformation";
import Run from "./Run";

const Information = () => {
 const [informations] = useInformation();
   
  return (
    <div>
      { 
      informations.map((information) => 
        <Run key={information._id} information={information}></Run>
      )}

 
    </div>
  );
};

export default Information;