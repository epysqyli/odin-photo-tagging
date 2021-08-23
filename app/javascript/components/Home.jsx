import React from "react";

const Home = (props) => {
  const username = props.username;
  const gamePath = props.gamePath;
  return (
    <div className="default-component">
      <h1>This is the first thing you see on the landing page</h1>
      <h2>Welcome, {username}. It is time to test your vision skills!</h2>
      <a href={gamePath}>Play game</a>
    </div>
  );
};

export default Home;
