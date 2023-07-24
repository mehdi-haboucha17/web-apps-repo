import { Avatar } from "@mui/material";
import React from "react";
import "./imageLayout.scss";

const ImageLayout = ({ image, text }) => {
  return (
    <div className="image-layout-container">
      <div className="image-layout-imgplay">
        <Avatar src={image} className="image-layout-img" />
      </div>
      <div className="image-layout-text">{text} </div>
    </div>
  );
};

export default ImageLayout;
