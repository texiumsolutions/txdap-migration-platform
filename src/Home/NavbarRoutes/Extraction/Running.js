import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useInformation from '../../../hooks/useInformation';

const Running = () => {
  const [showModal, setShowModal] = useState(true);
  const [informations] = useInformation();
  const [isRunning, setIsRunning] = useState(false);
  const [filled, setFilled] = useState(0);
  const { handleSubmit, register } = useForm();

  const handleClose = () => {
    setShowModal(false);
    setIsRunning(false);
  };

  const handleOpen = () => {
    setShowModal(true);
    setIsRunning(true);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 1500);
    }
  }, [filled, isRunning]);
  return (
    <div>
          <div>
      <div className="ep-formI">
        <p className="text-2xl ">Run profile </p>
        <p className="p-5">Total Data: {informations.length}</p>
        <div className="bg-base-600 ">
          <div className="form-control epI">
            <form onSubmit={handleSubmit(onSubmit)}>
              <select
                type="text"
                className=" ep-inputI p-1" 
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
              <label
                htmlFor="my-modal-3"
                className="btn btn-src bg-blue-700 text-white"
                onClick={handleOpen}
              >
                Run
              </label>
            </form>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      {showModal && (
        <div className="modal" id="my-modal-3" for="my-modal-3">
          <div className="modal-box relative progressbar">

            <div
              style={{
                height: "2px",
                width: `${filled}%`,
                backgroundColor: "blue",
                transition: "width 5s",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>

            <span className="progressPercent">{filled}%</span>
          </div>

          <div className="progressbar_modal">
            {/* 1st */}
            <div
              className={
                filled < 0
                  ? "progress_button progress_initiate"
                  : filled < 10
                    ? "progress_button progress_running"
                    : filled < 10
                      ? "progress_button progress_complete"
                      : "progress_button progress_complete"
              }
            >
              {filled < 0
                ? "Initiate"
                : filled < 10
                  ? "Running"
                  : filled < 10
                    ? "Complete"
                    : "Complete"}
            </div>

            {/* 2nd */}
            <div
              className={
                filled < 42
                  ? "progress_button progress_initiate"
                  : filled < 40
                    ? "progress_button progress_running"
                    : filled < 45
                      ? "progress_button progress_complete"
                      : "progress_button progress_complete"
              }
            >
              {filled < 42
                ? "Initiate"
                : filled < 40
                  ? "Running"
                  : filled < 45
                    ? "Complete"
                    : "Complete"}
            </div>

            {/* 3rd */}
            <div
              className={
                filled < 60
                  ? "progress_button progress_initiate"
                  : filled < 70
                    ? "progress_button progress_running"
                    : filled < 70
                      ? "progress_button progress_complete"
                      : "progress_button progress_complete"
              }
            >
              {filled < 60
                ? "Initiate"
                : filled < 70
                  ? "Running"
                  : filled < 70
                    ? "Complete"
                    : "Complete"}
            </div>

            {/* 4th */}
            <div
              className={
                filled < 90
                  ? "progress_button progress_initiate"
                  : filled < 90
                    ? "progress_button progress_running"
                    : filled < 100
                      ? "progress_button progress_complete"
                      : "progress_button progress_complete"
              }
            >
              {filled < 90
                ? "Initiate"
                : filled < 99
                  ? "Running"
                  : filled < 100
                    ? "Complete"
                    : "Complete"}
            </div>
          </div>
          <button
            onClick={handleClose}
            for="my-modal-3"
            className="btn btn-sm btn-circle relative bg-blue-800 right-2 top-0"
          >
            ✕
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Running;