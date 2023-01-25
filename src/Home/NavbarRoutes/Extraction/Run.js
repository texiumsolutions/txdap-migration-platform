import React from "react";
import Extraction from "./Extraction";
import './Extraction.css';
import { useForm } from "react-hook-form";

const Run = ({information}) => {

    const { name } = information;
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{console.log(data)};
  return (
   
    <div>
      <Extraction></Extraction>
      <p className="text-2xl">Run profile </p>
      <div className=" bg-base-600 ep-form">
        <div class="form-control ep">
          <form onSubmit={handleSubmit(onSubmit)}>
          <label class="label w-full flex">
              <span class="label-text name-input">Dropdown:</span>
              <select
                type="text"
                class=" ep-input p-1"
                {...register("dropdown")}
              >
                <option value="Pick your favorite dropdown" disabled selected>
                  Pick your favorite dropdown {name}
                </option>
                <option value={name}></option>
              </select>
            </label>
            <input className="btn btn-primary w-72 px-20 m-10" type="submit" value="Save" />
          </form>
        </div>
    </div>
    </div>
  );
};

export default Run;
