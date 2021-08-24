import React from "react";

const Menu = () => {
  return (
    <div className="popup-menu">
      <div className="character-name" onClick={() => console.log("Waldo")}>
        Waldo
      </div>
      <div className="character-name" onClick={() => console.log("Wenda")}>
        Wenda
      </div>
      <div className="character-name" onClick={() => console.log("Odlaw")}>
        Odlaw
      </div>
      <div
        className="character-name"
        onClick={() => console.log("Wizard Whitebeard")}
      >
        Wizard Whitebeard
      </div>
    </div>
  );
};

export default Menu;
