import React from "react";

const Square = (props) => {
  const index = props.index;
  return <div className="square" onClick={() => console.log(index)}></div>;
};

export default Square;
