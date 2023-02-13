import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Plus.css";

const Plus = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "File System", text: "File System" },
    { value: "Mongo DB", text: "Mongo DB" },
    { value: "MySQL Server", text: "MySQL Server" },
  ];

  const [selectedFirstFive, setSelectedFirstFive] = useState(true);
  const [selectedSecondFive, setSelectedSecondFive] = useState(false);
  const [selectedThirdFive, setSelectedThirdFive] = useState(false);

  const [selected, setSelected] = useState(options[0].value);
  const onSubmit = (data) => {
    fetch("http://localhost:5000/all_information", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          alert.success("Added New Product Successfully");

          reset();
        } else {
          alert.error("Failed add to the data");
        }
      });
    navigate('/home/allinformation')
  };

  const handleChange = (event) => {
    let value = event.target.value;

    if (value === "") {
      setSelectedFirstFive(false);
      setSelectedSecondFive(false);
      setSelectedThirdFive(false);
    } else if (value === "File System") {
      setSelectedFirstFive(true);
      setSelectedSecondFive(false);
      setSelectedThirdFive(false);
    } else if (value === "Mongo DB") {
      setSelectedFirstFive(false);
      setSelectedSecondFive(true);
      setSelectedThirdFive(false);
    } else if (value === "MySQL Server") {
      setSelectedFirstFive(false);
      setSelectedSecondFive(false);
      setSelectedThirdFive(true);
    }
    setSelected(value);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 p-3" >
        {/* Left Side  */}

        {/* Profile  */}
        <div className="m-2 ">
          <p className="text-2xl">Source Type</p>
          <div className="grid grid-cols-2">
            <div className=" bg-base-600 ep-form">
              <div className="form-control extraction_profile">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Number-01  */}

                  <label className="label justify-start">
                    <span className="label-text name-input ">Name:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("name")}
                      required
                    />
                  </label>
                  {/* Number-02  */}

                  <label className="label justify-start">
                    <span className="label-text name-input ">Type:</span>

                    <select
                      className=" ep-input p-1"
                      {...register("dropdown")}
                      required
                      value={selected}
                      onChange={handleChange}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </label>
                  {/* Number-03 */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Description:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className=" ep-input p-1"
                      {...register("description")}
                      required
                    />
                  </label>
                  <p className="text-2xl"> Parameters</p>
                  <div className="form-control ep">
                    {selectedFirstFive && (
                      <div>


                        {/* Number-01 */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 01:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input1")}
                            required
                          />
                        </label>
                        {/* Number-02  */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 02:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input2")}
                            required
                          />
                        </label>
                        {/* Number-03  */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 03:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input3")}
                            required
                          />
                        </label>
                      </div>
                    )}

                    {selectedSecondFive && (
                      <div>
                        {/* Number-04  */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 04:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input4")}
                            required
                          />
                        </label>
                        {/* Number-05  */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 05:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input5")}
                            required
                          />
                        </label>
                        {/* Number-06  */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 06:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input6")}
                            required
                          />
                        </label>
                      </div>
                    )}

                    {selectedThirdFive && (
                      <div>
                        {/* Number-07  */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 07:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input7")}
                            required
                          />
                        </label>
                        {/* Number-08  */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 08:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input8")}
                            required
                          />
                        </label>
                        {/* Number-09  */}

                        <label className="label justify-start">
                          <span className="label-text name-input">Input 9:</span>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="ep-input p-1"
                            {...register("input9")}
                            required
                          />
                        </label>
                      </div>
                    )}

                    <input
                      className="ebtn btn bg-blue-700 text-white mt-5"
                      type="submit"
                      value="Save"
                    />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plus;