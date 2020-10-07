import React, { useEffect } from "react";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Abilities from "./Abilities/Abilities";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
// import Layout from "./Layout/Layout.jsx";

const App = (props) => {
  return (
    <div>
      <NavBar />
      <Header />
      <div style={{ height: 200 }} />
      <AboutMe />
      <Resume />
      <Abilities />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
