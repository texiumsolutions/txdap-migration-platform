import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import useInformation from "../../hooks/useAllInformations";
import Modal from "../Dashboard/Modal";
import "../NavbarRoutes/Extraction/Extraction.css"

const Loading02 = () => {
  const [showModal, setShowModal] = useState(true);
  const [informations] = useInformation();
  const [isRunning, setIsRunning] = useState(false);
  const [filled, setFilled] = useState(0);

  const handleClose = () => {
    setShowModal(false);
    setIsRunning(false);
  };

  const handleOpen = () => {
    setShowModal(true);
    setIsRunning(true);
  };

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 1500);
    }
  }, [filled, isRunning]);
  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="btn btn-src bg-blue-700 text-white"
        onClick={handleOpen}
      >
        Run
      </label>
      {informations && <Modal id={informations}></Modal>}
      <Outlet></Outlet>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      {showModal && (
        <div className="modal" id="my-modal-3" htmlFor="my-modal-3">
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
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle relative bg-blue-800 right-2 top-0"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Loading02;
