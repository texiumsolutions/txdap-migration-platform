import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAllInformation from "../../hooks/useAllInformations";

const AllInformations = () => {
  const [allinformations] = useAllInformation();

  return (
    <div>
      <Link className="btn btn-sm m-4 btn-primary" to="/home/plus">
        Add
      </Link>
      <Link className="btn btn-sm m-4 btn-primary" to="/home/plus">
        Edit
      </Link>
      <Link className="btn btn-sm m-4 btn-primary" to="/home/plus">
        Delete
      </Link>
      <p>Here is all information</p>

      <div>
        <div class="overflow-x-auto">
        
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
                
                {/* Number-01  */}

                <tr className="px-20">
                {allinformations.map((allinformation) => (
                  <label
                    className="label justify-start"
                    key={allinformation._id}
                    allinformation={allinformation}
                    
                  ><th>1</th>
                    <td>{allinformation.name}</td>
                    <td>{allinformation.role}</td>
                    <td>{allinformation.type}</td>
                  </label>
                ))}
              </tr>
                
            </tbody>
          </table>
          <input
                    className="btn bg-blue-700 flex justify-center items-end text-white mt-5"
                    type="submit"
                    value="Save"
                  />
        
        
        </div>
        
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default AllInformations;
