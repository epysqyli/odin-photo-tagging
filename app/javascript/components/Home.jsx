import React from "react";

const Home = (props) => {
  const gamePath = props.gamePath;
  const charactersImg = props.charactersImg;

  return (
    <div className="home-container">
      <div className="title">where's waldo?</div>
      <div className="description">
        <p>
          The game that will test your abilities to distinguish Waldo's (and his
          friends') stupid face among hundreds of seemingly identical faces.
          What fun!
        </p>
        <img src={charactersImg} alt="where's waldo game characters" />
        <div className="character-names">
          <h3>Odlaw |</h3>
          <h3>Wizard Whitebeard |</h3>
          <h3>Wenda |</h3>
          <h3>Woof |</h3>
          <h3>Waldo</h3>
        </div>
      </div>
      <a className="btn" href={gamePath}>
        your turn awaits: play now !
      </a>
    </div>
  );
};

export default Home;
