import React, { useEffect, useState } from 'react';

const ProgressLoading = () => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 400);
    }
  }, [filled, isRunning]);
  return (
    <div>
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
    </div>
  );
};

export default ProgressLoading;