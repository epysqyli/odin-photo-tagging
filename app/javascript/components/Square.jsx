import React, { useState } from "react";

const Square = (props) => {
  const popupMenu = (
    <div className="popup-menu">
      <div className="character-name">Waldo</div>
      <div className="character-name">Wenda</div>
      <div className="character-name">Odlaw</div>
      <div className="character-name">Wizard Whitebeard</div>
    </div>
  );

  const { index, handleClick, showMenu } = props;

  return (
    <div className="square" onClick={() => handleClick(index)}>
      {showMenu.show && showMenu.squareNumber == index ? popupMenu : ""}
    </div>
  );
};

export default Square;
