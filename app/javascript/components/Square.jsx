import React from "react";
import Menu from "./Menu";

const Square = (props) => {
  const { index, handleClick, showMenu } = props;

  return (
    <div className="square" onClick={() => handleClick(index)}>
      {showMenu.show && showMenu.squareNumber == index ? <Menu /> : null}
    </div>
  );
};

export default Square;
