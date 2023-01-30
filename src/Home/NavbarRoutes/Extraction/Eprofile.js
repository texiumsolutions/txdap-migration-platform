import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Extraction from "./Extraction";
import "./Extraction.css";

const Eprofile = () => {
  const { register, handleSubmit, reset } = useForm();

  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 400);
    }
  }, [filled, isRunning]);

  const onSubmit = (data) => {
    console.log(data);

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
          toast.success("Added New Product Successfully");

          reset();
        } else {
          toast.error("Failed add to the data");
        }
      });
  };
  return (
    <div>
      <Extraction></Extraction>
      {/* <ToastContainer className="toast"></ToastContainer> */}
      <p className="text-2xl">Extraction profile </p>
      <div className=" bg-base-600 ep-form">
        <div class="form-control ep">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Number-01  */}

            <label class="label justify-start">
              <span class="label-text name-input">Name:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("name")}
                required
              />
            </label>
            {/* Number-02  */}

            <label class="label justify-start">
              <span class="label-text name-input">Dropdown:</span>
              <select
                type="text"
                class=" ep-input p-1"
                {...register("dropdown")}
                required
              >
                <option value="Pick your favorite dropdown" disabled selected>
                  Pick your favorite dropdown
                </option>
                <option value="hello1">Hello1</option>
                <option value="hello2">Hello2 </option>
                <option value="other">Hello3</option>
              </select>
            </label>
            {/* Number-03 */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 01:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input1")}
                required
              />
            </label>
            {/* Number-04  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 02:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input2")}
                required
              />
            </label>
            {/* Number-05  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 03:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input3")}
                required
              />
            </label>
            {/* Number-06  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 04:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input4")}
                required
              />
            </label>
            {/* Number-07  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 05:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input5")}
                required
              />
            </label>
            {/* Number-08  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 06:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input6")}
                required
              />
            </label>
            {/* Number-09  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 07:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input7")}
                required
              />
            </label>
            {/* Number-10  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 08:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input8")}
                required
              />
            </label>
            {/* Number-11  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 09:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input9")}
                required
              />
            </label>
            {/* Number-12  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 10:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input10")}
                required
              />
            </label>
            {/* Number-13  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 11:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input11")}
                required
              />
            </label>
            {/* Number-14  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 12:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input12")}
                required
              />
            </label>
            {/* Number-15  */}

            <label class="label justify-start">
              <span class="label-text name-input">Input 13:</span>
              <input
                type="text"
                placeholder="Type here"
                class="ep-input p-1"
                {...register("input13")}
                required
              />
            </label>

            <div className="progressbar">
              <div
                style={{
                  height: "100%",
                  width: `${filled}%`,
                  backgroundColor: "#3c03b7",
                  transition: "width 0.5s",
                }}
              ></div>
              <span className="progressPercent">{filled}%</span>
            </div>

            <input
              className="ebtn btn bg-blue-700 text-white mt-5"
              type="submit"
              value="Save"
              onClick={() => setIsRunning(true)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Eprofile;
