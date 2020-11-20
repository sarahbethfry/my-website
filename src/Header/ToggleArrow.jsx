import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";

const ToggleArrow = (props) => {
  return (
    <div className={classes.ToggleArrow}>
      <button className={classes.ArrowButton}>
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          size="5x"
          color="lightslategrey"
          className={classes.ArrowIcon}
        />
      </button>
    </div>
  );
};

export default ToggleArrow;
