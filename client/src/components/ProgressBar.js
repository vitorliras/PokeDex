import React from "react";


function ProgressBar({ title, width, text }) {
  const num = width + "%";
  return (
    <div className="progress-bar-container">
      <h3>{title}</h3>
      <div className="progress">
        <span style={{ width: num }}></span>
      </div>
      <h3 className="progress-bar">{text}</h3>
    </div>
  );
}


export default ProgressBar;