import React from "react";
import "./mainPage.scss";
import { Grid } from "@mui/material";
import LeftSidePanel from "./left-side-panel/leftSidePanel";
import StatusBar from "./status-box/statusBar";
import UploadSelection from "./upload-selection/uploadSelection";

const Layout = () => {
  return (
    <div className="mainpage-container">
      <Grid container>
        <Grid item xs={3}>
          <LeftSidePanel />
        </Grid>
        <Grid item xs={6} className="middle-container">
          <StatusBar />
          <UploadSelection />
        </Grid>
        <Grid item xs={3}>
          Right
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
