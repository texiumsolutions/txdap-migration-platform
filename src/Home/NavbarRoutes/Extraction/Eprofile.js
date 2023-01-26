import React from "react";
import Extraction from "./Extraction";
import { useForm } from "react-hook-form";
import "./Extraction.css";
import { toast } from "react-toastify";

const Eprofile = () => {
  const { register, handleSubmit , reset} = useForm();
  
  const onSubmit = (data) => {
    console.log(data);

  fetch("http://localhost:5000/information", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },

      body: JSON.stringify(data) })
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted.insertedId) {
            toast.success("Added New Product Successfully");

            reset();
          } else {
            toast.error("Failed add to the data");
          }
        });
    };
  return (
    <div>
        {/* <ToastContainer className="toast"></ToastContainer> */}
      <Extraction></Extraction>
      <p className="text-2xl">Extraction profile </p>
      <div className=" bg-base-600 ep-form">
        <div class="form-control ep">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Number-01  */}

            <label class="label w-full">
              <span class="label-text name-input">Name:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("name")}
              />
            </label>
            {/* Number-02  */}

            <label class="label w-full flex">
              <span class="label-text name-input">Dropdown:</span>
              <select
                type="text"
                class=" ep-input p-1"
                {...register("dropdown")}
              >
                <option value="Pick your favorite dropdown" disabled selected>
                  Pick your favorite dropdown
                </option>
                <option value="female">Hello1</option>
                <option value="male">Hello2 </option>
                <option value="other">Hello3</option>
              </select>
            </label>
            {/* Number-03 */}

            <label class="label w-full">
              <span class="label-text name-input">Input 01:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input1")}
              />
            </label>
            {/* Number-04  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 02:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input2")}
              />
            </label>
            {/* Number-05  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 03:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input3")}
              />
            </label>
            {/* Number-06  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 04:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input4")}
              />
            </label>
            {/* Number-07  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 05:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input5")}
              />
            </label>
            {/* Number-08  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 06:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input6")}
              />
            </label>
            {/* Number-09  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 07:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input7")}
              />
            </label>
            {/* Number-10  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 08:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input8")}
              />
            </label>
            {/* Number-11  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 09:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input9")}
              />
            </label>
            {/* Number-12  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 10:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input10")}
              />
            </label>
            {/* Number-13  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 11:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input11")}
              />
            </label>
            {/* Number-14  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 12:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input12")}
              />
            </label>
            {/* Number-15  */}

            <label class="label w-full">
              <span class="label-text name-input">Input 13:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input13")}
              />
            </label>

            <input className="btn bg-blue-700 text-white mt-5" type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Eprofile;
