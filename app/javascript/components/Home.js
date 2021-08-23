import React from "react";

const Home = (props) => {
  const username = props.username;
  return (
    <div className="default-component">
      <h1>This is the first thing you see on the landing page</h1>
      <h2>Welcome, {username}. It is time to test your vision skills!</h2>
    </div>
  );
};

export default Home;
