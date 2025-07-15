import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  
  return (
     <div id="home">
      <h1>{name} is a Web developer from {city}</h1>
      Home
    </div>
  )
}

export default Home;
