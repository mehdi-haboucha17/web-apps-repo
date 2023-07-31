import React from "react";
import "./mainPage.scss";
import { Grid } from "@mui/material";
import LeftSidePanel from "./left-side-panel/leftSidePanel";
import StatusBar from "./status-box/statusBar";
import UploadSelection from "./upload-selection/uploadSelection";
import PostContainer from "./post-container/postContainer";
import RightSidePanel from "./right-side-panel/rightSidePanel";

const Layout = () => {
  return (
    <div className="mainpage-container">
      <Grid container className="mainpage">
        <Grid item xs={3}>
          <LeftSidePanel />
        </Grid>
        <Grid item xs={6} className="middle-container">
          <StatusBar />
          <UploadSelection />
          <PostContainer />
        </Grid>
        <Grid item xs={3} className="right-container">
          <RightSidePanel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
