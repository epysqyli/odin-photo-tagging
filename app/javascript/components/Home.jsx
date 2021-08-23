import React from "react";

const Home = (props) => {
  const username = props.username;
  const gamePath = props.gamePath;
  const waldoOne = props.waldoOne;
  const waldoTwo = props.waldoTwo;
  const waldoThree = props.waldoThree;
  const wenda = props.wenda;
  const odlaw = props.odlaw;
  const wizard = props.wizard;
  const woof = props.woof;

  return (
    <div className="home-container">
      <div className="title">where's waldo?</div>
      <div className="description">
        The game that will test your abilities to distinguish Waldo's (and his
        friends') stupid face among hundreds of seemingly identical faces. What
        fun!
        <div className="profile-images">
          <h2>This is Waldo</h2>
          <img src={waldoTwo} alt="waldo profile pic" />
          <img src={waldoOne} alt="waldo profile pic" />
          <img src={waldoThree} alt="waldo profile pic" />
        </div>
        <div className="profile-images">
          <h2>This is Odlaw</h2>
          <img src={odlaw} alt="odlaw profile pic" />
        </div>
        <div className="profile-images">
          <h2>This is Wenda</h2>
          <img src={wenda} alt="wenda profile pic" />
        </div>
        <div className="profile-images">
          <h2>This is Wizard Whitehead</h2>
          <img src={wizard} alt="wizard profile pic" />
        </div>
        <div className="profile-images">
          <h2>And then there's Woof</h2>
          <img src={woof} alt="woof profile pic" />
        </div>
      </div>
      <a className="btn" href={gamePath}>
        your turn awaits: play now !
      </a>
    </div>
  );
};

export default Home;
