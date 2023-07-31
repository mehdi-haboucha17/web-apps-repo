import React from "react";
import "./navBar.scss";
import fbLogo from "../../images/logo.png";

import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./headerIcon";
const NavBar = () => {
  return (
    <div className="navbar-main">
      {/* left */}
      <div className="navbar-left">
        <div className="navbar-left-img">
          <img src={fbLogo} alt={"Facebook Logo"} width="35px" />
        </div>
        <div className="navbar-left-search">
          <SearchIcon className="navbar-left-search-icon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/* center */}
      <div className="navbar-center">
        <div className="navbar-center-icons">
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
    </div>
  );
};

export default NavBar;
