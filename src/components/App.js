import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import user from "../data/user";
import Links from "./Links";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About links={user.links} bio={user.bio} />
      <Links links={user.links} />
    </div>
  );
}

export default App;
