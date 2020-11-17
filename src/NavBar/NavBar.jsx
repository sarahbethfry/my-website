import React from "react";

import NavItem from "./NavItem/NavItem";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={classes.NavBar}>
      <ul>
        <NavItem to="about-me"> About Me </NavItem>
        <NavItem to="experiences"> Experiences </NavItem>
        <NavItem to="skills"> Skills </NavItem>
        <NavItem to="projects"> Projects </NavItem>
        <NavItem to="contact"> Contact </NavItem>
      </ul>
    </nav>
  );
};

export default NavBar;
