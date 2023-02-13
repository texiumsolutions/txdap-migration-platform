import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import useAllInformation from "../../hooks/useAllInformations";
import Modal from "./Modal";

const AllInformations = () => {
  const [allinformations, setAllInformations] = useAllInformation();
  // console.log(allinformations);
  const [informations, setInformations] = useState(null);
  // console.log(informations);

  const handleDelete = informations => {

    const proceed = window.confirm('Are you sure delete this?');
    if (proceed) {
      const url = `http://localhost:5000/all_information/${informations}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remainingInfo = allinformations.filter(info => info._id !== informations);
          setAllInformations(remainingInfo);
        })

    }
  }

  return (
    <div>
      <Link className="btn btn-sm m-4 btn-primary" to="/home/plus">
        Add
      </Link>
      <div>
        <div className="overflow-x-auto mt-12">
          <table class="table w-full">
            <thead>
              <tr>
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
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                allinformations.map((info) => <tr>

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
                  <label for="update-modal"
                    onClick={() => setInformations(info._id)}
                    className="btn bg-blue-700 text-white mt-2">Update
                  </label>
                  <label
                    onClick={() => handleDelete(info._id)}

                    className="btn bg-red-700 text-white ml-10">Delete
                  </label>
                </tr>)
              }

            </tbody>
          </table>
        </div>

      </div>

      {informations && <Modal id={informations}></Modal>}
      <Outlet></Outlet>
    </div>
  );
};

export default AllInformations;