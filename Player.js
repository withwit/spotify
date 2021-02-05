import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer.js";

function Player({ spotify }) {
  return (
    <div className="palyer">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
        <Footer />
      </div>
    </div>
  );
}

export default Player;
