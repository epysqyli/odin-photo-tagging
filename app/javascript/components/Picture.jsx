import React, { useState, useEffect } from "react";
import Square from "../components/Square";

const Picture = (props) => {
  const [showMenu, setShowMenu] = useState({ show: false, squareNumber: null });
  const [chars, setChars] = useState([
    "Waldo",
    "Wenda",
    "Odlaw",
    "Wizard Whitebeard",
  ]);
  const [foundChars, setFoundChars] = useState([]);
  const [squares, setSquares] = useState([]);

  const handleClick = (squareNumber) => {
    if (showMenu.show) {
      setShowMenu({ show: false, squareNumber });
    } else {
      setShowMenu({ show: true, squareNumber });
    }
  };

  const sendChoice = async (apiUrl, charName, charPos) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    let resp = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: charName, position: charPos }),
    });
    resp = await resp.json();

    // update found chars
    if (resp.result === "found") {
      setFoundChars([
        ...foundChars,
        resp.found_chars[resp.found_chars.length - 1],
      ]);
    }
    console.log(resp);

    // update squares status (found v not-found)
    const square = { pos: charPos, status: resp.result };
    setSquares([...squares, square]);
  };

  const apiUrl = "/api/v1/characters/check_move";

  const { imagePath } = props;

  // remove already found chars from the chars state
  useEffect(() => {
    if (foundChars.length) {
      const arrayFoundChars = foundChars.map((char) => char.name);
      const newChars = chars.filter((char) => !arrayFoundChars.includes(char));
      setChars(newChars);
    }
  }, [foundChars]);

  return (
    <div className="picture-container">
      <div className="container">
        <img src={imagePath} alt="waldo picture" />
        <div className="squares-container">
          {[...Array(1160)].map((element, index) => {
            return (
              <Square
                key={index}
                index={index}
                handleClick={handleClick}
                showMenu={showMenu}
                sendChoice={sendChoice}
                apiUrl={apiUrl}
                chars={chars}
                foundChars={foundChars}
                squares={squares}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Picture;
