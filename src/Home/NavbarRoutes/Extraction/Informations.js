import React, { useEffect, useState } from "react";
import { SiAddthis } from "react-icons/si";
import { Link } from "react-router-dom";
import Loading02 from "../../Loading/Loading02";
import "./Extraction.css";
import { useForm } from "react-hook-form";

const Informations = () => {
  const [userData, setUserData] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState();
  console.log(deleteMessage);
  const { register, handleSubmit, reset } = useForm();

  const updateDelMessage = { updateDeleteMessage: deleteMessage };

  useEffect(() => {
    const getData = async () => {
      const reqData = await fetch(
        "http://localhost:5000/profile"
      );
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
      // console.log(checkedvalue);
      setDeleteMessage(checkedvalue);
    }
  };

  const onSubmit = (data) => {
    const checkedInputValue = [];
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].isChecked === true) {
        checkedInputValue.push(parseInt(userData[i]._id));
      }
    }

    fetch("http://localhost:5000/updateRun", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(updateDelMessage),
    })
      .then((res) => res.json())
      .then(data => setDeleteMessage(data))
  };

  return (
    <div className="">
      <div>
        <Link className="btn btn-src bg-blue-700 text-white" to="/home/plus">
          Add{" "}
          <p className="pl-2">
            <SiAddthis></SiAddthis>
          </p>
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="submit"
            value="Run"
            className="m-8 bg-blue-700 text-white p-2 cursor-pointer"
          >
          </input>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  {/* <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox text-xl"
                        name="allselect"
                        checked={
                          !userData.some((user) => user?.isChecked === false)
                        }
                        onChange={handleChange}
                      />{" "}
                    </label>
                  </th> */}
                  <th>Select Data</th>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Source Type</th>
                  <th>Description</th>
                  {/* <th>Input1</th>
                  <th>Input2</th>
                  <th>Input3</th> */}
                  {/* <th>Input4</th>
                  <th>Input5</th>
                  <th>Input6</th>
                  <th>Input7</th>
                  <th>Input8</th> */}
                  {/* <th>Input9</th>
                  <th>Input10</th>
                  <th>Input11</th>
                  <th>Input12</th>
                  <th>Input13</th> */}
                  {/* <th>Input14</th>
                  <th>Input15</th> */}
                  <th>Target Type</th>
                  <th>Target Description</th>
                  <th>Target Input6</th>
                  <th>Target Input7</th>

                </tr>
              </thead>
              <tbody>
                {userData.map((getusers, index) => (
                  <tr key={index}>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          name={getusers.name}
                          checked={getusers?.isChecked || false}
                          onChange={handleChange}
                        />
                      </label>
                    </th>
                    <td>{index + 1}</td>
                    <td>{getusers.name}</td>
                    <td>{getusers.type}</td>
                    <td>{getusers.description}</td>
                    {/* <td>{getusers.input1}</td>
                    <td>{getusers.input2}</td>
                    <td>{getusers.input3}</td>
                    <td>{getusers.input4}</td>
                    <td>{getusers.input5}</td>
                    <td>{getusers.input6}</td>
                    <td>{getusers.input7}</td>
                    <td>{getusers.input8}</td>
                    <td>{getusers.input9}</td>
                    <td>{getusers.input10}</td>
                    <td>{getusers.input11}</td>
                    <td>{getusers.input12}</td>
                    <td>{getusers.input13}</td> */}
                    {/* <td>{getusers.input14}</td>
                    <td>{getusers.input15}</td> */}
                    <td>{getusers.target_type}</td>
                    <td>{getusers.target_description}</td>
                    <td>{getusers.target_input6}</td>
                    <td>{getusers.target_input7}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
      <p className=" justify-center items-center text-2xl text-black p-8">
        (Note: This page is not yet complete due to some errors. This run button
        is kept as a demo. This demo Run button is placed to show how the data
        will be loaded when the actual run button is clicked. <br />)
      </p>
      <Loading02></Loading02>
    </div>
  );
};

export default Informations;
