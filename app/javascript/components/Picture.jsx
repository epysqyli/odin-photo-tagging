import React, { useState, useEffect } from "react";
import Square from "../components/Square";

const Picture = (props) => {
  const imagePath = props.imagePath;

  return (
    <div className="picture-container">
      <div className="container">
        <img src={imagePath} alt="waldo picture" />
        <div className="squares-container">
          {[...Array(1160)].map((element, index) => {
            return <Square key={index} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Picture;
