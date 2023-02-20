import React from "react";
import { useForm } from "react-hook-form";
import useInformation from "../../../hooks/useInformation";
import Home from "../../Home";
import "./Transformation.css";

const Transformation = () => {
  const [informations] = useInformation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5000/updateRun", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          alert("Added New Product Successfully")

          reset();
        } else {
          alert("Failed add to the data");
        }
      });
  };

  return (
    <div>
      <Home></Home>
      
      <div className="">
      <p className="text-2xl p-6">Action Mapping </p>
        <p className="p-5">Total Data: {informations.length}</p>
        <div className="bg-base-600 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <select
                type="text"
                className=" ep-inputI p-1"
                {...register("dropdown")}
              >
                <option disabled selected>
                  Pick your favorite Simpson
                </option>
                {informations.map((information) => (
                  <option key={information._id} information={information}>
                    {information.name}
                  </option>
                ))}
              </select>
              <label
                htmlFor="my-modal-3"
                className="btn p-5 bg-blue-700 text-white"
              >
                Load Attributes
              </label>
            </form>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="overflow-x-auto">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Source Key</th>
                <th>Target Key</th>
                <th>Data Type</th>
                <th>Drop</th>
              </tr>
            </thead>
            <tbody
              style={{
                border: "1px solid black",
              }}
            >
              <td className="px-20">
                {informations.map((information) => (
                  <label
                    className="label justify-start"
                    key={information._id}
                    information={information}
                  >
                    {information.input1}
                  </label>
                ))}
              </td>
              <td>
                {informations.map((information) => (
                  <label
                    className="label justify-start"
                    key={information._id}
                    information={information}
                  >
                    <input
                      style={{
                        border: "1px solid black",
                      }}
                      type="text"
                      defaultValue={information.input1}
                      required
                    />
                  </label>
                ))}
              </td>
              
                
              <td className="px-20">
              <label className="label justify-start">
              <span className="label-text name-input">Type:</span>
              <select
                type="text"
                className=" ep-input p-1"
                {...register("dropdown")}
                required
              >
                <option  placeholder="Pick your favorite dropdown" disabled>
                  Pick your favorite dropdown
                </option>
                <option value="hello1">Date</option>
                <option value="hello2">String</option>
                <option value="other">Int</option>
              </select>
            </label>
              </td>
             <td>
              <button className="btn-primary">Delete</button>
             </td>
            </tbody>
          </table>
          <input
              className="btn transformation_button bg-blue-700 m-8"
              type="submit"
              value="Create Mapping"
            />
        </div>
      </form>
    </div>
  );
};

export default Transformation;
