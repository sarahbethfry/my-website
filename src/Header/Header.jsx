import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import VinylImage from "../VinylImage/VinylImage";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <VinylImage />
    </div>
  );
};

export default Header;
