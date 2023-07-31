import React from "react";
import "./navBar.scss";
const HeaderIcon = ({ Icon }) => {
  return (
    <div className="header-icon-container">
      <Icon className="header-icon" />
    </div>
  );
};

export default HeaderIcon;
