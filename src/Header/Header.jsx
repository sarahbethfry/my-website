import React from "react";
import ToggleArrow from "./ToggleArrow.jsx";
import VinylImage from "../VinylImage/VinylImage";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <VinylImage />
      <ToggleArrow />
    </div>
  );
};

export default Header;
