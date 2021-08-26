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
  const [counter, setCounter] = useState(0);

  const handleClick = (squareNumber) => {
    if (showMenu.show) {
      setShowMenu({ show: false, squareNumber });
    } else {
      setShowMenu({ show: true, squareNumber });
    }
  };

  const apiUrl = "/api/v1/characters/check_move";

  const remainingChars = (
    <div>
      <div className="timer">{counter} seconds</div>
      <p className="chars-list">Remaining characters:</p>
      {chars.map((char, index) => {
        return (
          <p className="character" key={index}>
            {char}
          </p>
        );
      })}
    </div>
  );

  // gameover has a form to send the winner name to post api
  const gameOver = (
    <form className="gameover">
      <label htmlFor="winner">Your name</label>
      <input type="text" id="winner" />
      <div className="submit-btn">Save your score!</div>
    </form>
  );

  const incrementCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
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

    // state to update squares status (found v not-found)
    const square = { pos: charPos, status: resp.result };
    setSquares([...squares, square]);
  };

  // remove not-found status squares
  const cleanSquares = () => {
    if (squares.length) {
      const onlyFound = squares.filter((s) => s.status == "found");
      setSquares(onlyFound);
    }
  };

  const removeFoundChars = () => {
    if (foundChars.length) {
      const arrayFoundChars = foundChars.map((char) => char.name);
      const newChars = chars.filter((char) => !arrayFoundChars.includes(char));
      setChars(newChars);
    }
  };

  useEffect(() => {
    removeFoundChars();
    if (foundChars.length == 4) {
      clearTimeout(incrementCounter);
    }
  }, [foundChars]);

  useEffect(() => {
    if (foundChars.length < 4) setTimeout(incrementCounter, 1000);
  }, [counter]);

  const { imagePath } = props;

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
                cleanSquares={cleanSquares}
              />
            );
          })}
        </div>
      </div>
      <div className="player-info">
        {chars.length ? remainingChars : gameOver}
      </div>
    </div>
  );
};

export default Picture;
