import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <Link
        activeClass="active"
        to={props.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavItem;
