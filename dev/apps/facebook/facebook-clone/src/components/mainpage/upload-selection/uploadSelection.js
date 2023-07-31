import React from "react";
import "./uploadSelection.scss";
import { Avatar, Paper } from "@mui/material";
import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feelings.png";
const UploadSelection = () => {
  return (
    <div className="upload-selection-parent-container">
      <Paper className="upload-selection-container">
        <div className="upload-selection-top">
          <div>
            <Avatar className="upload-selection-img" />
          </div>
          <div>
            <input
              className="upload-selection-box"
              type="text"
              placeholder="What's on your mind ?"
            />
          </div>
        </div>
        <div className="upload-selection-bottom">
          <div className="upload-selection-bottom-tabs">
            <img src={live} width="35px" alt="live" />
            <div className="upload-selection-bottom-text">Live Video</div>
          </div>
          <div className="upload-selection-bottom-tabs">
            <img src={image} width="35px" alt="img" />
            <div className="upload-selection-bottom-text">Photo/Video</div>
          </div>
          <div className="upload-selection-bottom-tabs">
            <img src={feeling} width="35px" alt="feeling" />
            <div className="upload-selection-bottom-text">Feeling/Activity</div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default UploadSelection;
