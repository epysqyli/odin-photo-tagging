import React, { useEffect, useState } from "react";
import Menu from "./Menu";

const Square = (props) => {
  const [squareClass, setSquareClass] = useState("square");

  const {
    index,
    handleClick,
    showMenu,
    sendChoice,
    apiUrl,
    chars,
    foundChars,
    squares,
  } = props;

  useEffect(() => {
    if (squares.length) {
      squares.forEach((sqr) => {
        if (sqr.pos == index) {
          setSquareClass(`square ${sqr.status}`);
        }
      });
      // make not-found squares clickable again after 3000ms
    }
  }, [squares]);

  return (
    <div className={squareClass} onClick={() => handleClick(index)}>
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
