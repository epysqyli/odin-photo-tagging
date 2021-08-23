import React, { useState, useEffect } from "react";

const Picture = (props) => {
  const imagePath = props.imagePath;
  return (
    <div>
      <img src={imagePath} alt="waldo picture" />
    </div>
  );
};

export default Picture;
