import React from "react";

const Home = (props) => {
  const username = props.username;
  const gamePath = props.gamePath;
  return (
    <div className="home-container">
      <div className="title">where's waldo?</div>
      <p>
        The game that will test your abilities to distinguish Waldo's (and his friends') stupid
        face among hundreds of seemingly identical faces. What fun!
      </p>
      <a className="btn" href={gamePath}>your turn awaits: play now !</a>
    </div>
  );
};

export default Home;
