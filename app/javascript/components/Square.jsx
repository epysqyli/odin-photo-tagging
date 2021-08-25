import React from "react";
import Menu from "./Menu";

const Square = (props) => {
  const { index, handleClick, showMenu, sendChoice, apiUrl } = props;

  return (
    <div className="square" onClick={() => handleClick(index)}>
      {showMenu.show && showMenu.squareNumber == index ? (
        <Menu sendChoice={sendChoice} apiUrl={apiUrl} charPos={index} />
      ) : null}
    </div>
  );
};

export default Square;
