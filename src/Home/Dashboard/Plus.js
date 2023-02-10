import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Plus.css";

const Plus = () => {
  const { register, handleSubmit, reset } = useForm();

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
    fetch("http://localhost:5000/run", {
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
                    {/* <select
                      value={selected}
                      onChange={handleChange}
                      // type="text"
                      className=" ep-input p-1"
                      {...register("dropdown")}
                      required
                    >
                      <option
                        placeholder="Pick your favorite dropdown"
                        disabled
                      >
                        Pick your favorite dropdown
                      </option>
                      <option value="fileSystem">File System</option>
                      <option value="mongodb">Mongo DB</option>
                      <option value="mysql">MySQL Server</option>
                    </select> */}
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

                  {/* <input
                    className="ebtn  btn bg-blue-700 text-white mt-5"
                    type="submit"
                    value="Save"
                  /> */}
                </form>
              </div>
            </div>
          </div>

          {/* Parameters  */}
          <p className="text-2xl"> Parameters</p>
          <div className="form-control ep">
            <form onSubmit={handleSubmit(onSubmit)}>
              {selectedFirstFive && (
                <div>
                  {/* Number-01  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Name:</span>
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
                    <span className="label-text name-input">Name:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("name")}
                      required
                    />
                  </label>
                  {/* Number-03 */}

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
                  {/* Number-04  */}

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
                  {/* Number-05  */}

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
                  {/* Number-06  */}

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
                  {/* Number-07  */}

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
                  {/* Number-08  */}

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
                  {/* Number-09  */}

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
                  {/* Number-10  */}

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
                </div>
              )}

              {selectedThirdFive && (
                <div>
                  {/* Number-11  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 09:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input9")}
                      required
                    />
                  </label>
                  {/* Number-12  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 10:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input10")}
                      required
                    />
                  </label>
                  {/* Number-13  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 11:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input11")}
                      required
                    />
                  </label>
                  {/* Number-14  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 12:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input12")}
                      required
                    />
                  </label>
                  {/* Number-15  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 13:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input13")}
                      required
                    />
                  </label>
                </div>
              )}

              {/* <input
                className="ebtn btn bg-blue-700 text-white mt-5"
                type="submit"
                value="Save"
              /> */}
            </form>
          </div>
        </div>

        {/* Right Side  */}
        <div className="m-2">
          <p className="text-2xl">Target Type</p>
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
                    {/* <select
                      value={selected}
                      onChange={handleChange}
                      // type="text"
                      className=" ep-input p-1"
                      {...register("dropdown")}
                      required
                    >
                      <option
                        placeholder="Pick your favorite dropdown"
                        disabled
                      >
                        Pick your favorite dropdown
                      </option>
                      <option value="fileSystem">File System</option>
                      <option value="mongodb">Mongo DB</option>
                      <option value="mysql">MySQL Server</option>
                    </select> */}
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

                  {/* <input
                    className="ebtn  btn bg-blue-700 text-white mt-5"
                    type="submit"
                    value="Save"
                  /> */}
                </form>
              </div>
            </div>
          </div>

          {/* Parameters  */}
          <p className="text-2xl"> Parameters</p>
          <div className="form-control ep">
            <form onSubmit={handleSubmit(onSubmit)}>
              {selectedFirstFive && (
                <div>
                  {/* Number-01  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Name:</span>
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
                    <span className="label-text name-input">Name:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("name")}
                      required
                    />
                  </label>
                  {/* Number-03 */}

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
                  {/* Number-04  */}

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
                  {/* Number-05  */}

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
                  {/* Number-06  */}

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
                  {/* Number-07  */}

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
                  {/* Number-08  */}

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
                  {/* Number-09  */}

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
                  {/* Number-10  */}

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
                </div>
              )}

              {selectedThirdFive && (
                <div>
                  {/* Number-11  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 09:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input9")}
                      required
                    />
                  </label>
                  {/* Number-12  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 10:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input10")}
                      required
                    />
                  </label>
                  {/* Number-13  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 11:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input11")}
                      required
                    />
                  </label>
                  {/* Number-14  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 12:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input12")}
                      required
                    />
                  </label>
                  {/* Number-15  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 13:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input13")}
                      required
                    />
                  </label>
                </div>
              )}

              {/* <input
                className="ebtn btn bg-blue-700 text-white mt-5"
                type="submit"
                value="Save"
              /> */}
            </form>
          </div>
        </div>
        
      </div>
      <input
                    className="ebtn  btn bg-blue-700 flex justify-center items-end text-white mt-5"
                    type="submit"
                    value="Save"
                  />
    </div>
  );
};

export default Plus;
