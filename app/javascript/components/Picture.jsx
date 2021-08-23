import React, { useState, useEffect } from "react";

const Picture = (props) => {
  const imagePath = props.imagePath;
  return (
    <div className="picture-container">
      <div className="container">
        <img src={imagePath} alt="waldo picture" />
        <div className="example">
          {/* put squares in here */}
        </div>
      </div>
    </div>
  );
};

export default Picture;
