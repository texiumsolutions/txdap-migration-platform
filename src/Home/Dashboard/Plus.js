import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Plus.css";

const Plus = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

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
          alert("Added New Product Successfully");

          reset();
        } else {
          alert("Failed add to the data");
        }
      });
  };
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


   const targetOptions = [
    { valueT: "", text: "--Choose an option--" },
    { valueT: "File System", text: "File System" },
    { valueT: "Mongo DB", text: "Mongo DB" },
    { valueT: "MySQL Server", text: "MySQL Server" },
  ];
  const handleChange = (event) => {
    let valueT = event.target.value;

    if (valueT === "") {
      setSelectedFirstFive(false);
      setSelectedSecondFive(false);
      setSelectedThirdFive(false);
    } else if (valueT === "File System") {
      setSelectedFirstFive(true);
      setSelectedSecondFive(false);
      setSelectedThirdFive(false);
    } else if (valueT === "Mongo DB") {
      setSelectedFirstFive(false);
      setSelectedSecondFive(true);
      setSelectedThirdFive(false);
    } else if (valueT === "MySQL Server") {
      setSelectedFirstFive(false);
      setSelectedSecondFive(false);
      setSelectedThirdFive(true);
    }
    setSelected(valueT);
  };

  // target 
  const [selectedFirstFiveT, setSelectedFirstFiveT] = useState(true);
  const [selectedSecondFiveT, setSelectedSecondFiveT] = useState(false);
  const [selectedThirdFiveT, setSelectedThirdFiveT] = useState(false);

  const [selectedT, setSelectedT] = useState(targetOptions[0].value);


  const handleChangeT = (event) => {
    let value = event.target.value;

    if (value === "") {
      setSelectedFirstFiveT(false);
      setSelectedSecondFiveT(false);
      setSelectedThirdFiveT(false);
    } else if (value === "File System") {
      setSelectedFirstFiveT(true);
      setSelectedSecondFiveT(false);
      setSelectedThirdFiveT(false);
    } else if (value === "Mongo DB") {
      setSelectedFirstFiveT(false);
      setSelectedSecondFiveT(true);
      setSelectedThirdFiveT(false);
    } else if (value === "MySQL Server") {
      setSelectedFirstFiveT(false);
      setSelectedSecondFiveT(false);
      setSelectedThirdFiveT(true);
    }
    setSelectedT(value);
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
                      {...register("type")}
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
                    <span className="label-text name-input">Input:01</span>
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
                    <span className="label-text name-input">Input02:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input2")}
                      required
                    />
                  </label>
                  {/* Number-03 */}

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
                </div>
              )}

              {selectedSecondFive && (
                <div>
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
                    <span className="label-text name-input">Input 09:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input9")}
                      required
                    />
                  </label>
                  {/* Number-10  */}

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
                </div>
              )}

              {selectedThirdFive && (
                <div>
                  {/* Number-11  */}

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
                  {/* Number-12  */}

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
                  {/* Number-13  */}

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
                  {/* Number-14  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 14:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input14")}
                      required
                    />
                  </label>
                  {/* Number-15  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 15:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("input15")}
                      required
                    />
                  </label>
                </div>
              )}

             
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
                      {...register("target_name")}
                      required
                    />
                  </label>
                  {/* Number-02  */}

                  <label className="label justify-start">
                    <span className="label-text name-input ">Type:</span>
                    <select
                      className=" ep-input p-1"
                      {...register("target_type")}
                      required
                      value={selectedT}
                      onChange={handleChangeT}
                    >
                      {targetOptions.map((targetOption) => (
                        <option key={targetOption.valueT} value={targetOption.valueT}>
                          {targetOption.text}
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
                      {...register("target_description")}
                      required
                    />
                  </label>
                </form>
              </div>
            </div>
          </div>

          {/* Parameters  */}
          <p className="text-2xl"> Parameters</p>
          <div className="form-control ep">
            <form onSubmit={handleSubmit(onSubmit)}>
              {selectedFirstFiveT && (
                <div>
                  {/* Number-01  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input01:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input1")}
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
                      {...register("target_input2")}
                      required
                    />
                  </label>
                  {/* Number-03 */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 03:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input3")}
                      required
                    />
                  </label>
                  {/* Number-04  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 04:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input4")}
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
                      {...register("target_input5")}
                      required
                    />
                  </label>
                </div>
              )}

              {selectedSecondFiveT && (
                <div>
                  {/* Number-06  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 06:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input6")}
                      required
                    />
                  </label>
                  {/* Number-07  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 07:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input7")}
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
                      {...register("target_input8")}
                      required
                    />
                  </label>
                  {/* Number-09  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 09:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input9")}
                      required
                    />
                  </label>
                  {/* Number-10  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 10:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input10")}
                      required
                    />
                  </label>
                </div>
              )}

              {selectedThirdFiveT && (
                <div>
                  {/* Number-11  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 11:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input11")}
                      required
                    />
                  </label>
                  {/* Number-12  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 12:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input12")}
                      required
                    />
                  </label>
                  {/* Number-13  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 13:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input13")}
                      required
                    />
                  </label>
                  {/* Number-14  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 14:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input14")}
                      required
                    />
                  </label>
                  {/* Number-15  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Input 15:</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="ep-input p-1"
                      {...register("target_input15")}
                      required
                    />
                  </label>
                </div>
              )}

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
