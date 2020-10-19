import React, { useEffect } from "react";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
// import Layout from "./Layout/Layout.jsx";

const App = (props) => {
  return (
    <div>
      <NavBar />
      <Header />
      <div style={{ height: 200 }} />
      <AboutMe />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
