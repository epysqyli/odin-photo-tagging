import React, { useState } from "react";
import Square from "../components/Square";

const Picture = (props) => {
  const [showMenu, setShowMenu] = useState({ show: false, squareNumber: null });

  const handleClick = (squareNumber) => {
    console.log(squareNumber);
    if (showMenu.show) {
      setShowMenu({ show: false, squareNumber });
    } else {
      setShowMenu({ show: true, squareNumber });
    }
  };

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
