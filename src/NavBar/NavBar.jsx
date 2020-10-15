import React from "react";

import NavItem from "./NavItem/NavItem";
import classes from "./NavBar.module.css";
// import arrow from "../Assets/down_arrow.png";

const NavBar = (props) => {
  return (
    <nav className={classes.NavBar}>
      <ul>
        {/* <img src={arrow} alt="down arrow" className={classes.arrow} /> */}
        <NavItem to="about-me"> About Me </NavItem>
        <NavItem to="experiences"> Experiences </NavItem>
        <NavItem to="abilities"> Abilities </NavItem>
        <NavItem to="projects"> Projects </NavItem>
        <NavItem to="contact"> Contact </NavItem>
      </ul>
    </nav>
  );
};

export default NavBar;
