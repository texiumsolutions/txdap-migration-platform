import React, { useEffect, useState } from "react";

import { SiAddthis } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import useAllInformation from "../../../hooks/useAllInformations";
import useInformation from "../../../hooks/useInformation";
import Modal from "../../Dashboard/Modal";
import "./Extraction.css";

const Informations = () => {
  const [showModal, setShowModal] = useState(true);
  const [informations] = useInformation();
  const [isRunning, setIsRunning] = useState(false);
  const [filled, setFilled] = useState(0);

  const handleClose = () => {
    setShowModal(false);
    setIsRunning(false);
  };

  const handleOpen = () => {
    setShowModal(true);
    setIsRunning(true);
  };

 
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 1500);
    }
  }, [filled, isRunning]);

  // const [allinformations, setAllInformations] = useAllInformation();
  // console.log(allinformations);

  // const handleDelete = (informations) => {
  //   const proceed = window.confirm("Are you sure delete this?");
  //   if (proceed) {
  //     const url = `http://localhost:5000/all_information/${informations}`;
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         const remainingInfo = allinformations.filter(
  //           (info) => info._id !== informations
  //         );
  //         setAllInformations(remainingInfo);
  //       });
  //   }
  // };


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
    <div className="">
      {/* <Link className="btn btn-src bg-blue-700 text-white" to="/home/plus">
        Add{" "}
        <p className="pl-2">
          <SiAddthis></SiAddthis>
        </p>
      </Link>
      <label
                      htmlFor="my-modal-3"
                      className="btn btn-src bg-blue-700 text-white"
                      onClick={handleOpen}
                    >
                      Run
                    </label> */}
      {/* <div>
        <div className="overflow-x-auto mt-12 ml-5">
          <table class="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <span>Select</span>
                  </label>
                </th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
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
              {allinformations.map((info) => (
                <tr>
                  <td>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </td>
                  <td>{info.name}</td>
                  <td>{info.dropdown}</td>
                  <td>{info.description}</td>
                  <td>{info.input1}</td>
                  <td>{info.input2}</td>
                  <td>{info.input3}</td>
                  <td>{info.input4}</td>
                  <td>{info.input5}</td>
                  <td>{info.input6}</td>
                  <td>{info.input7}</td>
                  <td>{info.input8}</td>
                  <td>{info.input9}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

<div>
     <h5>{delMsg}</h5>
     <Link className="btn btn-src bg-blue-700 text-white" to="/home/plus">
        Add{" "}
        <p className="pl-2">
          <SiAddthis></SiAddthis>
        </p>
      </Link>
      <button className="btn btn-primary m-8"
      onClick={()=> {handlealldelete()}} >Run</button>
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

      {informations && <Modal id={informations}></Modal>}
      <Outlet></Outlet>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      {showModal && (
        <div className="modal" id="my-modal-3" for="my-modal-3">
          <div className="modal-box relative progressbar">
            <div
              style={{
                height: "2px",
                width: `${filled}%`,
                backgroundColor: "blue",
                transition: "width 5s",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>

            <span className="progressPercent">{filled}%</span>
          </div>

          <div className="progressbar_modal">
            {/* 1st */}
            <div
              className={
                filled < 0
                  ? "progress_button progress_initiate"
                  : filled < 10
                  ? "progress_button progress_running"
                  : filled < 10
                  ? "progress_button progress_complete"
                  : "progress_button progress_complete"
              }
            >
              {filled < 0
                ? "Initiate"
                : filled < 10
                ? "Running"
                : filled < 10
                ? "Complete"
                : "Complete"}
            </div>

            {/* 2nd */}
            <div
              className={
                filled < 42
                  ? "progress_button progress_initiate"
                  : filled < 40
                  ? "progress_button progress_running"
                  : filled < 45
                  ? "progress_button progress_complete"
                  : "progress_button progress_complete"
              }
            >
              {filled < 42
                ? "Initiate"
                : filled < 40
                ? "Running"
                : filled < 45
                ? "Complete"
                : "Complete"}
            </div>

            {/* 3rd */}
            <div
              className={
                filled < 60
                  ? "progress_button progress_initiate"
                  : filled < 70
                  ? "progress_button progress_running"
                  : filled < 70
                  ? "progress_button progress_complete"
                  : "progress_button progress_complete"
              }
            >
              {filled < 60
                ? "Initiate"
                : filled < 70
                ? "Running"
                : filled < 70
                ? "Complete"
                : "Complete"}
            </div>

            {/* 4th */}
            <div
              className={
                filled < 90
                  ? "progress_button progress_initiate"
                  : filled < 90
                  ? "progress_button progress_running"
                  : filled < 100
                  ? "progress_button progress_complete"
                  : "progress_button progress_complete"
              }
            >
              {filled < 90
                ? "Initiate"
                : filled < 99
                ? "Running"
                : filled < 100
                ? "Complete"
                : "Complete"}
            </div>
          </div>
          <button
            onClick={handleClose}
            for="my-modal-3"
            class="btn btn-sm btn-circle relative bg-blue-800 right-2 top-0"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Informations;
