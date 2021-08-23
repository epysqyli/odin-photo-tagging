import React from "react";

const Home = (props) => {
  const username = props.username;
  const gamePath = props.gamePath;
  const waldoOne = props.waldoOne;
  const waldoTwo = props.waldoTwo;
  const waldoThree = props.waldoThree;
  return (
    <div className="home-container">
      <div className="title">where's waldo?</div>
      <div className="description">
        The game that will test your abilities to distinguish Waldo's (and his
        friends') stupid face among hundreds of seemingly identical faces. What
        fun!
        <div className="profile-images">
          <img src={waldoTwo} alt="waldo profile pic" />
          <img src={waldoOne} alt="waldo profile pic" />
          <img src={waldoThree} alt="waldo profile pic" />
        </div>
      </div>
      <a className="btn" href={gamePath}>
        your turn awaits: play now !
      </a>
    </div>
  );
};

export default Home;
