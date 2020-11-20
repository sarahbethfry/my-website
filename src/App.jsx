import React, { useState } from "react";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";

const App = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  console.log(showNavBar);

  const toggleNavBarHandler = () => {
    setShowNavBar(!showNavBar);
  };
  return (
    <div>
      <Header clicked={toggleNavBarHandler} />
      <NavBar open={showNavBar} />
      <AboutMe />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
