import React, { useState, useEffect } from "react";
import Square from "../components/Square";

const Picture = (props) => {
  const { imagePath, winners } = props;

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
  const [winnerName, setWinnerName] = useState("");
  const [winnersList, setWinnersList] = useState(winners);

  const resetState = () => {
    setChars(["Waldo", "Wenda", "Odlaw", "Wizard Whitebeard"]);
    clearTimeout(incrementCounter);
    setCounter(0);
  };

  const apiUrl = "/api/v1/characters/check_move";

  const handleClick = (squareNumber) => {
    if (showMenu.show) {
      setShowMenu({ show: false, squareNumber });
    } else {
      setShowMenu({ show: true, squareNumber });
    }
  };

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
  const handleChange = (e) => {
    const newWinnerName = e.target.value;
    setWinnerName(newWinnerName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWinner(winnerUrl, winnerName, counter);
  };

  const gameOver = (
    <form className="gameover" onSubmit={handleSubmit}>
      <label htmlFor="winner">Your name</label>
      <input type="text" id="winner" onChange={handleChange} />
      <div
        className="right-btn"
        onClick={() => sendWinner(winnerUrl, winnerName, counter)}
      >
        Save your score!
      </div>
    </form>
  );

  const winnerUrl = "/winners/create";

  const sendWinner = async (apiUrl, name, time) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    let resp = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: name, time: time }),
    });
    resp = await resp.json();
    setWinnersList(resp);
  };

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

  // refactor using setInterval?
  useEffect(() => {
    if (foundChars.length < 4) setTimeout(incrementCounter, 1000);
  }, [counter]);

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
      <div className="right-side">
        <div className="player-info">
          {chars.length ? remainingChars : gameOver}
        </div>
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          {winnersList.map((winner) => {
            return (
              <p className="winner" key={winner.id}>
                {winner.name}: {winner.time} sec
              </p>
            );
          })}
        </div>
        <div className="right-btn" onClick={resetState}>
          play again
        </div>
        <div className="right-btn">go home</div>
      </div>
    </div>
  );
};

export default Picture;
