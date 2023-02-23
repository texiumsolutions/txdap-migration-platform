import React, { useState } from "react";
import { useEffect } from "react";
import { SiAddthis } from "react-icons/si";
import { Link } from "react-router-dom";

const House = () => {
  const [userData, setUserData] = useState([]);
  const [delMsg, setDelMsg] = useState('');
  useEffect(() => {
    const getData = async () => {
      const reqData = await fetch("http://localhost:5000/run");
      const resData = await reqData.json();
      setUserData(resData);
    };
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allselect") {
      const checkedvalue = userData.map((user) => {
        return { ...user, isChecked: checked };
      });
      console.log(checkedvalue);
      setUserData(checkedvalue);
    } else {
      const checkedvalue = userData.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      console.log(checkedvalue);
      setUserData(checkedvalue);
    }
  };

  const handlealldelete = async() =>{
    const checkedInputValue = [];
    for(let i=0; i<userData.length; i++)
    {
       if(userData[i].isChecked===true)
       {
        checkedInputValue.push(parseInt(userData[i]._id));
       }
    }
    const url = `http://localhost:5000/updateRun`;
    fetch(url, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    
  };
  
  return (
    <div>
     <h5>{delMsg}</h5>
     <Link className="btn btn-src bg-blue-700 text-white" to="/home/plus">
        Add{" "}
        <p className="pl-2">
          <SiAddthis></SiAddthis>
        </p>
      </Link>
      <button className="btn btn-primary m-8"
      onClick={()=> {handlealldelete()}}>Run</button>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    class="checkbox"
                    name="allselect"
                    checked={
                      !userData.some((user) => user?.isChecked === false)
                    }
                    onChange={handleChange}
                  />{" "}
                  <span>Select</span>
                </label>
              </th>
              <th>Index</th>
              <th>Name</th>
              <th>File Type</th>
              <th>Input1</th>
              <th>Input2</th>
              <th>Input3</th>
              <th>Input4</th>
              <th>Input5</th>
              <th>Input6</th>
              <th>Input7</th>
              <th>Input8</th>
              <th>Input9</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((getusers, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      class="checkbox"
                      name={getusers.name}
                      checked={getusers?.isChecked || false}
                      onChange={handleChange}
                    />
                  </label>
                </th>
                <td>{index + 1}</td>
                <td>{getusers.name}</td>
                <td>{getusers.dropdown}</td>
                <td>{getusers.input1}</td>
                <td>{getusers.input2}</td>
                <td>{getusers.input3}</td>
                <td>{getusers.input4}</td>
                <td>{getusers.input5}</td>
                <td>{getusers.input6}</td>
                <td>{getusers.input7}</td>
                <td>{getusers.input8}</td>
                <td>{getusers.input9}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default House;
