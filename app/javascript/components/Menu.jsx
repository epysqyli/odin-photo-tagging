import React from "react";

const Menu = (props) => {
  const { sendChoice, apiUrl, charPos } = props;

  return (
    <div className="popup-menu">
      <div
        className="character-name"
        onClick={() => sendChoice(apiUrl, "Waldo", charPos)}
      >
        Waldo
      </div>
      <div
        className="character-name"
        onClick={() => sendChoice(apiUrl, "Wenda", charPos)}
      >
        Wenda
      </div>
      <div
        className="character-name"
        onClick={() => sendChoice(apiUrl, "Odlaw", charPos)}
      >
        Odlaw
      </div>
      <div
        className="character-name"
        onClick={() => sendChoice(apiUrl, "Wizard Whitebeard", charPos)}
      >
        Wizard Whitebeard
      </div>
    </div>
  );
};

export default Menu;
