import React, { useState, useEffect } from "react";

const Picture = (props) => {
  const imagePath = props.imagePath;
  const [dims, setDims] = useState({ width: null, height: null });

  useEffect(() => {
    const container = [...document.getElementsByClassName("container")][0];
    const width = container.clientWidth;
    const height = container.clientHeight;
    let newDims = { ...dims };
    newDims.width = width;
    newDims.height = height;
    setDims(newDims);
  }, []);

  return (
    <div className="picture-container">
      <div className="container">
        <img src={imagePath} alt="waldo picture" />
        <div className="example"></div>
      </div>
    </div>
  );
};

export default Picture;
