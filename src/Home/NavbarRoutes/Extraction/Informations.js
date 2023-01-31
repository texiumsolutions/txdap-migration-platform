import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import "./Extraction.css";
import Extraction from "./Extraction";
import { Link } from "react-router-dom";
import useInformation from "../../../hooks/useInformation";

const Informations = () => {
  const [informations] = useInformation();
  const [isRunning, setIsRunning] = useState(false);
  const [filled, setFilled] = useState(0);
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 300);
    }
  }, [filled, isRunning]);

  return (
    <div>
      <Extraction></Extraction>
      <div className="ep-formI">
        <p className="text-2xl ">Run profile </p>
        <p className="p-5">Total Data: {informations.length}</p>
        <div className="bg-base-600 ">
          <div class="form-control epI">
            <form onSubmit={handleSubmit(onSubmit)}>
              <select
                type="text"
                class=" ep-inputI p-1"
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
              <a
                href="#my-modal-2"
                className="btn-src bg-blue-700 text-white "
                type="submit"
                onClick={() => setIsRunning(true)}
                for="my-modal-2"
              >
                Run
              </a>
            </form>
          </div>
        </div>
      </div>
      <div class="modal" id="my-modal-2" for="my-modal-2">
        <div class="modal-box progressbar">
          <div
            style={{
              height: "100%",
              width: `${filled}%`,
              backgroundColor: "#3c03b7",
              transition: "width 0.5s",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          ></div>
        </div>
        <span className="progressPercent">{filled}%</span>
        <Link
          to='/runs'
          for="my-modal-2"
          class="btn btn-sm btn-circle relative bg-blue-800 right-2 top-3"
        >
          ✕
        </Link>
      </div>
    </div>
  );
};

export default Informations;
