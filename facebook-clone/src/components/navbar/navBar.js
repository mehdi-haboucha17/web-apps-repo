import React from "react";
import { Grid, Avatar } from "@mui/material";
import "./navBar.scss";
import fbLogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
const NavBar = () => {
  return (
    <div>
      <Grid container className="navbar-main">
        <Grid item xs={3}>
          <div className="navbar-left">
            <img src={fbLogo} alt={"Facebook Logo"} width="35px" />
            <input
              className="navbar-search"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="navbar-container">
            <div className="navbar-tabs active">
              <img src={home} alt={"Home Logo"} width="35px" height="35px" />
            </div>
            <div className="navbar-tabs">
              <img src={page} alt={"Pages Logo"} width="35px" height="35px" />
            </div>
            <div className="navbar-tabs">
              <img src={watch} alt={"Watch Logo"} width="35px" height="35px" />
            </div>
            <div className="navbar-tabs">
              <img
                src={market}
                alt={"Market Logo"}
                width="35px"
                height="35px"
              />
            </div>
            <div className="navbar-tabs">
              <img src={group} alt={"Group Logo"} width="35px" height="35px" />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="navbar-right">
            <div className="navbar-right-tab">
              <Avatar className="navbar-right-avatar" />
              <div className="navbar-profilename">User 99</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
