import React from "react";

const Menu = (props) => {
  const { sendChoice, apiUrl, charPos, chars, foundChars } = props;

  // print chars who have not already been found
  return (
    <div className="popup-menu">
      {chars.map((char, index) => {
        return (
          <div
            className="character-name"
            key={index}
            onClick={() => sendChoice(apiUrl, char, charPos)}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
