import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "./Extraction.css";

const Eprofile = () => {
  const { register, handleSubmit, reset } = useForm();

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
          // toast.success("Added New Product Successfully");

          reset();
        } else {
          // toast.error("Failed add to the data");
        }
      });
  };
  return (
    <div>
      {/* <ToastContainer className="toast"></ToastContainer> */}
      <p className="text-2xl">Extraction profile </p>
      <div className=" bg-base-600 ep-form">
        <div className="form-control ep">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <span className="label-text name-input">Dropdown:</span>
              <select
                type="text"
                className=" ep-input p-1"
                {...register("dropdown")}
                required
              >
                <option  placeholder="Pick your favorite dropdown" disabled>
                  Pick your favorite dropdown
                </option>
                <option value="hello1">Hello1</option>
                <option value="hello2">Hello2 </option>
                <option value="other">Hello3</option>
              </select>
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

            <input
              className="ebtn btn bg-blue-700 text-white mt-5"
              type="submit"
              value="Save"
            />
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Eprofile;
