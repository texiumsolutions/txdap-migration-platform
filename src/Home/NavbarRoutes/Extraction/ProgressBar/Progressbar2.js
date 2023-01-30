import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Circle from "./Circle";
import "./Progress.css";

const Progressbar2 = () => {
  const [pcircle] = useState(5);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth((100 / (pcircle - 1)) * active);
  }, [pcircle, active]);

  const arr = [];
  for (let i = 1; i < pcircle; i++) {
    arr.push(
      <Circle className={i <= active ? "pcircle active" : "pcircle"} key={i}>
        {i}
      </Circle>
    );
  }

  const [circles, setCircles] = useState([]);

  useEffect(() => {
    fetch("circleData.json")
      .then((res) => res.json())
      .then((data) => setCircles(data));
  }, []);
  return (
    <div className="pcontainer h-screen">
      <div className="pcontent">
        <div className="pprogressbar">
          <div
            className="pprogress"
            style={{
              width: width + "%",
            }}
          ></div>
          {arr}
        </div>
        <div className='my-10'>
        {/* {
                    circles.map(circle => <span
                        key={circle._id}
                        circle={circle}
                    >{circle.name}</span>)
                   
                } */}
    </div>
        
       
        <div className="pbutton">
          <button
            className="prev btnn"
            onClick={() => {
              active <= 0 ? setActive(0) : setActive(active - 1);
            }}
          >
            Prev
          </button>
          <button
            className="next btnn"
            onClick={() => {
              active >= pcircle ? setActive(pcircle) : setActive(active + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progressbar2;
