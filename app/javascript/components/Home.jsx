import React from "react";

const Home = (props) => {
  const gamePath = props.gamePath;
  const charactersImg = props.charactersImg

  return (
    <div className="home-container">
      <div className="title">where's waldo?</div>
      <div className="description">
        The game that will test your abilities to distinguish Waldo's (and his
        friends') stupid face among hundreds of seemingly identical faces. What
        fun!
        <div className="characters">
          <img src={charactersImg} alt="where's waldo game characters" />
        </div>
      </div>
      <a className="btn" href={gamePath}>
        your turn awaits: play now !
      </a>
    </div>
  );
};

export default Home;
