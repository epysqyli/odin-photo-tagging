import React from "react";
import Menu from "./Menu";

const Square = (props) => {
  const { index, handleClick, showMenu, sendChoice, apiUrl, chars, foundChars } =
    props;

  return (
    <div className="square" onClick={() => handleClick(index)}>
      {showMenu.show && showMenu.squareNumber == index ? (
        <Menu
          sendChoice={sendChoice}
          apiUrl={apiUrl}
          charPos={index}
          chars={chars}
          foundChars={foundChars}
        />
      ) : null}
    </div>
  );
};

export default Square;
