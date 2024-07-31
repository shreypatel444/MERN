import React from "react";
import bull from "../images/Bull.jpg";
import "../style/PhotoHome.css"

export default function PhotoHome() {
  return (
    <>
      <div className="main-photo">
        <img src={bull} alt="Pic" className="bull-img"/>
      </div>
    </>
  );
}
