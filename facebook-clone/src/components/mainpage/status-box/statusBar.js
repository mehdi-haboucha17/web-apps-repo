import React from "react";
import Status from "./status";
import "./statusBar.scss";
const StatusBar = () => {
  return (
    <div className="status-bar-container">
      <Status />
      <Status />
      <Status />
      <Status />
    </div>
  );
};

export default StatusBar;
