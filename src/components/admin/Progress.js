import React from 'react'

 const Progress = ({ percentage, uploadedPhoto }) => {
  return (
    <div 
      className="progress"
      style={{ minWidth: "100%", marginBottom: "1em" }}>
      <div 
        className={`progress-bar ${uploadedPhoto === "" ? "progress-bar-striped progress-bar-animated" : "bg-success"}`}
        role="progressbar" 
        style={{ width: `${percentage}%`}} 
        >
      {uploadedPhoto === "" ? percentage : "Done!"}
      </div>
    </div>
  );
};

export default Progress
