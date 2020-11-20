import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import VinylImage from "../VinylImage/VinylImage";
import classes from "./Header.module.css";

const Header = (props) => {
  console.log(props.clicked);
  return (
    <div className={classes.Header}>
      <VinylImage />
      <div className={classes.ToggleArrow}>
        <button onClick={props.clicked} className={classes.ArrowButton}>
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            size="5x"
            color="lightslategrey"
            className={classes.ArrowIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
