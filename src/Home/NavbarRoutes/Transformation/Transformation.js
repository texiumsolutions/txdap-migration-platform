import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import useInformation from "../../../hooks/useInformation";
import Home from "../../Home";
import "./Transformation.css";
import TransformationInfo from "./TransformationInfo";

const Transformation = () => {
  const [transformation, setTransformation] = useState('');
  const [informations] = useInformation();
  const [info, setInfo] = useState({});
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://txdap-migration-platform-server-production.up.railway.app/run-name/${transformation}`)
      .then(res => res.json())
      .then(data => setInfo(data))
  }, [transformation])

  const onSubmit = (data) => {
    // console.log(data);
    setTransformation(data?.dropdown)
  };

  return (
    <div>
      <Home></Home>

      <div className="">
        <p className="text-2xl p-6">Action Mapping </p>
        <div className="bg-base-600 pl-3 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <select
              type="text"
              className="transformation-info-input ep-inputI p-1"
              {...register("dropdown")}
            >
              <option disabled selected>
               Select One
              </option>
              {informations.map((information) => (
                <option key={information._id} information={information}>
                  {information.name}
                </option>
              ))}
            </select>
            <input
              type='submit'
              value='Load Attributes'
              className="bg-blue-700 ml-4 text-white px-6 py-2 border rounded cursor-pointer"
            >
            </input>
          </form>
        </div>
        <TransformationInfo info={info}></TransformationInfo>
      </div>

    </div>
  );
};

export default Transformation;
