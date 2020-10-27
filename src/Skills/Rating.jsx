import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import classes from "./Skills.module.css";

const Rating = ({ level }) => {
  const items = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= level) {
      items.push(
        <FontAwesomeIcon
          icon={faCompactDisc}
          size="lg"
          color="lightpink"
          spin
        />
      );
    } else {
      items.push(
        <FontAwesomeIcon
          icon={faCompactDisc}
          size="lg"
          color="lightslategray"
        />
      );
    }
  }

  return <div className={classes.Ratings}>{items}</div>;
};

export default Rating;
