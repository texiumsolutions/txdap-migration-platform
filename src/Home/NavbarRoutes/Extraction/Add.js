import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../Dashboard/Plus.css";
import * as XLSX from "xlsx";
import { Table } from "antd";

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

  const [colDefs, setColDefs] = useState();
  const [data, setData] = useState();
  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach(row => {
      let rowData = {}
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      })
      rows.push(rowData);
    });
    return rows;
  };


  const importExcel = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      // parse data
      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: "binary" });
      //  get first Sheet
      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];
      // convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      // console.log(fileData)
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      setColDefs(heads);

      fileData.splice(0, 1);
      setData(convertToJson(headers, fileData));
    };
    reader.readAsBinaryString(file);
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
        
                  <label className="label justify-start">
                    <span className="label-text name-input">Select File</span>
                    <input
                      type="file"
                      accept=".csv"
                      onChange={importExcel}
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
          {selectedFirstFive && (
            <Table columns={colDefs} dataSource={data}></Table>
          )}
          <input
            className="ebtn  btn bg-blue-700 text-white mt-5 text-2xl  justify-center mx-80"
            type="submit"
            value="Create Profile"
          />
        </form>
      </div>
    </div>
  );
};

export default Add;
