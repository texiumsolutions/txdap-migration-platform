import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import useAllInformation from "../../hooks/useAllInformations";
import Modal from "./Modal";
import { SiAddthis } from "react-icons/si";

const AllInformations = () => {
  const [allinformations, setAllInformations] = useAllInformation();
  // console.log(allinformations);
  const [informations, setInformations] = useState(null);
  // console.log(informations);

  const handleDelete = informations => {

    const proceed = window.confirm('Are you sure delete this?');
    if (proceed) {
      const url = `https://txdap-migration-platform-server-production.up.railway.app/all_information/${informations}`;
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
    <div className="">
      <Link className="btn btn-sm m-4 bg-blue-700 text-xl" to="/home/plus">
        Add <p className="pl-2"><SiAddthis></SiAddthis></p>
      </Link>
      <div>
        <div className="overflow-x-auto mt-12 ml-5">
          <table className="table w-full">
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
                <th className="pl-8">Update</th>
                <th className="pl-8">Delete</th>
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
                  <td>
                    <label htmlFor="update-modal"
                      onClick={() => setInformations(info._id)}
                      className="btn bg-blue-700 text-white">Update
                    </label>
                  </td>
                  <td>
                    <label
                      onClick={() => handleDelete(info._id)}
                      className="btn bg-red-700 text-white">Delete
                    </label>
                  </td>
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