import React from "react";
import { Link } from "react-scroll";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li>
      <Link
        className={classes.NavItem}
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
