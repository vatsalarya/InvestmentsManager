import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Invest.MENTS</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">11</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">22</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://i.ibb.co/bFpghcj/17-DOGS-mobile-Master-At3x-v2.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
