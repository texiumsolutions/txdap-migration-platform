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
        <div class="overflow-x-auto w-full">
        
          <table class="table w-full">
            <tbody class="flex items-center space-x-3">
            
              <tr>
              <label >
                <td className="Input_Gap_allinformation">Name</td>
                <th className="Input_Gap_allinformation">Type</th>
                <th className="Input_Gap_allinformation">Description</th>
                <th className="Input_Gap_allinformation">Input 01</th>
                <th className="Input_Gap_allinformation">Input 02</th>
                <th className="Input_Gap_allinformation">Input 03</th>
                <th className="Input_Gap_allinformation">Input 04</th>
                <th className="Input_Gap_allinformation">Input 05</th>
                <th className="Input_Gap_allinformation">Input 06</th>
                <th className="Input_Gap_allinformation">Input 07</th>
                <th className="Input_Gap_allinformation">Input 08</th>
                <th className="Input_Gap_allinformation">Input 09</th>
                <th className="Input_Gap_allinformation">Input 10</th>
                <th className="Input_Gap_allinformation">Input 11</th>
                <th className="Input_Gap_allinformation">Input 12</th>
                <th className="Input_Gap_allinformation">Input 13</th>
                <th className="Input_Gap_allinformation">Input 14</th>
                <th className="Input_Gap_allinformation">Input 15</th>
                </label>
              </tr>
              
            </tbody>
            <tbody class="flex items-center space-x-3">
                
                {/* Number-01  */}

                <tr>
                {allinformations.map((allinformation) => (
                  <label
                    className=""
                    key={allinformation._id}
                    allinformation={allinformation}
                    
                  >
                    <td className="Input_Gap_allinformation">{allinformation.name}</td>
                    <td className="Input_Gap_allinformation">{allinformation.type}</td>
                    <td className="Input_Gap_allinformation">{allinformation.description}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input1}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input2}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input3}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input4}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input5}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input6}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input7}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input8}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input9}</td>
                    <td  className="Input_Gap_allinformation">{allinformation.input10}</td>
                    <td  className="Input_Gap_allinformation">{allinformation.input11}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input12}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input13}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input14}</td>
                    <td className="Input_Gap_allinformation">{allinformation.input15}</td>
                  </label>
                ))}
              </tr>
                
            </tbody>
          </table>
        </div>
        <div class="overflow-x-auto">
        
        <table class="table table-compact w-full">
            <tbody>
              <label>
              <tr >
                <th  className="Input_Gap_allinformation">Name</th>
                <th  className="Input_Gap_allinformation">Type</th>
                <th  className="Input_Gap_allinformation">Description</th>
                <th  className="Input_Gap_allinformation">Input 01</th>
                <th  className="Input_Gap_allinformation">Input 02</th>
                <th>Input 03</th>
                <th>Input 04</th>
                <th>Input 05</th>
                <th>Input 06</th>
                <th>Input 07</th>
                <th>Input 08</th>
                <th>Input 09</th>
                <th>Input 10</th>
                <th>Input 11</th>
                <th>Input 12</th>
                <th>Input 13</th>
                <th>Input 14</th>
                <th>Input 15</th>
              </tr>
              </label>
            </tbody>
            <tbody>
                
                {/* Number-01  */}

                <tr className="">
                {allinformations.map((allinformation) => (
                  <label
                    className="label justify-start"
                    key={allinformation._id}
                    allinformation={allinformation}
                    
                  >
                  <td>{allinformation.target_name}</td>
                  <td>{allinformation.target_type}</td>
                  <td>{allinformation.target_description}</td>
                  <td>{allinformation.target_input1}</td>
                  <td>{allinformation.target_input2}</td>
                  <td>{allinformation.target_input3}</td>
                  <td>{allinformation.target_input4}</td>
                  <td>{allinformation.target_input5}</td>
                  <td>{allinformation.target_input6}</td>
                  <td>{allinformation.target_input7}</td>
                  <td>{allinformation.target_input8}</td>
                  <td>{allinformation.target_input9}</td>
                  <td>{allinformation.target_input10}</td>
                  <td>{allinformation.target_input11}</td>
                  <td>{allinformation.target_input12}</td>
                  <td>{allinformation.target_input13}</td>
                  <td>{allinformation.target_input14}</td>
                  <td>{allinformation.target_input15}</td>
                </label>
                ))}
              </tr>  
            </tbody>
          </table>
        
        </div>
        
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default AllInformations;
