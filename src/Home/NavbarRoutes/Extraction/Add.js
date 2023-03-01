import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../Dashboard/Plus.css";
import Papa from "papaparse";

const Add = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch(
      "https://txdap-migration-platform-server-production.up.railway.app/all_information",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(data),
      }
    )
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
  const targetOptions = [
    { valueT: "", text: "--Choose an option--" },
    { valueT: "File System", text: "File System" },
    { valueT: "Mongo DB", text: "Mongo DB" },
    { valueT: "MySQL Server", text: "MySQL Server" },
  ];

  const [selectedFirstFive, setSelectedFirstFive] = useState(true);
  const [selectedSecondFive, setSelectedSecondFive] = useState(false);
  const [selectedThirdFive, setSelectedThirdFive] = useState(false);

  const [selected, setSelected] = useState(options[0].value);

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

  // target
  const [selectedFirstFiveT, setSelectedFirstFiveT] = useState(true);
  const [selectedSecondFiveT, setSelectedSecondFiveT] = useState(false);
  const [selectedThirdFiveT, setSelectedThirdFiveT] = useState(false);

  const [selectedT, setSelectedT] = useState(targetOptions[0].valueT);
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

  // State to store parsed data
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };
  return (
    <div className="w-full m-10">
      <div className="form-control">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-2xl  justify-center mx-80 ">
            Type Your Name Here First
          </p>
          {/* Name Input Here  */}

          <label className="label justify-center mx-80">
            <span className="label-text name-input ">Name:</span>
            <input
              type="text"
              placeholder="Type here"
              className="ep-input p-1"
              {...register("name")}
              required
            />
          </label>
          <div className="grid grid-cols-2 gap-2 p-3">
            {/* Left Source Type  */}
            <div>
              {/* Number-02  */}
              <p className="text-2xl">Source Type</p>

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
              {/* Number-02 */}

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

              {/* Parameters  */}
              <p className="text-2xl"> Parameters</p>

              {selectedFirstFive && (
                <div>
                  {" "}
                  <label className="label justify-start">
                    <span className="label-text name-input">Select File</span>

                    {/* File Uploader */}
                    <input
                      type="file"
                      name="file"
                      onChange={changeHandler}
                      accept=".csv"
                      // {...register("csv")}
                      
                    />
                  </label>
                  {/* Number-02  */}
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
                </div>
              )}

              {selectedSecondFive && (
                <div>
                  {/* Number-06  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Source</span>
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
                </div>
              )}
            </div>
            {/* Right Target Type  */}
            <div>
              <p className="text-2xl">Target Type</p>
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
                    <option
                      key={targetOption.valueT}
                      value={targetOption.valueT}
                    >
                      {targetOption.text}
                    </option>
                  ))}
                </select>
              </label>

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
              {/* Parameters  */}
              <p className="text-2xl"> Parameters</p>
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
                </div>
              )}

              {selectedSecondFiveT && (
                <div>
                  {/* Number-06  */}

                  <label className="label justify-start">
                    <span className="label-text name-input">Target</span>
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
                </div>
              )}
            </div>
          </div>
          <input
            className="ebtn  btn bg-blue-700 text-white mt-5 text-2xl  justify-center mx-80"
            type="submit"
            value="Create Profile"
          />
         
          {selectedFirstFive && (
            <div>
            <div>
              <h1 className="text-xl mt-10 m-auto flex justify-center items-center">Source CSV Data</h1>
              {/* Table */}
              <table>
                <thead>
                  <tr>
                    {tableRows.map((rows, index) => {
                      return <th key={index}>{rows}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {values.map((value, index) => {
                    return (
                      <tr key={index}>
                        {value.map((val, i) => {
                          return <td key={i}>{val}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
           
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default Add;
