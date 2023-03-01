import { Table } from "antd";
import React from "react";
import { useState } from "react";
import * as XLSX from "xlsx";
 
const House = () => {
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
      {/* Number-01  */}

      <label className="label justify-start">
        <span className="label-text name-input">Select File</span>
        <input type="file" onChange={importExcel} />
      </label>
      <Table style={{
      }} columns={colDefs} dataSource={data}></Table>
    </div>
  );
};

export default House;