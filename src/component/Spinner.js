import React from "react";
import "./spinner.css";
const Spinner = () => {
  return (
    <div className=" flex flex-col space-y-2 items-center">
      <div className="spinner"></div>
      <p className="text-lg font-bold text-indigo-900">Loading...</p>
    </div>
  );
};

export default Spinner;
