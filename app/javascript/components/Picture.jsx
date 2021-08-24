import React, { useState, useEffect } from "react";
import Square from "../components/Square";

const Picture = (props) => {
  const [showMenu, setShowMenu] = useState({ show: false, squareNumber: null });
  const [sent, setSent] = useState(false);

  const handleClick = (squareNumber) => {
    console.log(squareNumber);
    if (showMenu.show) {
      setShowMenu({ show: false, squareNumber });
    } else {
      setShowMenu({ show: true, squareNumber });
    }
  };

  const sendChoice = async (apiUrl) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    let resp = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: "Odlaw", position: 802 }),
    });
    resp = await resp.json();
    console.log(resp);
  };

  const sendChoiceTwo = async (apiUrl) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    let resp = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: "Waldo", position: 736 }),
    });
    resp = await resp.json();
    console.log(resp);
  };

  useEffect(() => {
    const url = "/api/v1/characters/check_move";
    sendChoice(url);
  }, []);

  useEffect(() => {
    const url = "/api/v1/characters/check_move";
    sendChoiceTwo(url);
  }, []);

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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Picture;
