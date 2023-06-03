import React from "react";
import Welcome from "./Welcome";
import Info from "./Info";

function Home() {
  return (
    <div className="home-container">
      {/* This div represents the container for the Home component */}
      <Welcome />
      {/* The Welcome component */}
      <Info />
      {/* The Info component */}
    </div>
  );
}

export default Home;
