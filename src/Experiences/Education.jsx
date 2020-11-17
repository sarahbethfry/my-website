import React from "react";
import classes from "./Experiences.module.css";

const Education = ({
  school,
  website,
  linkLabel,
  location,
  program,
  date,
  description,
}) => {
  return (
    <div className={classes.experienceSections}>
      <div className={classes.experiencesRow}>
        <div className={classes.experiencesColLeft}>
          <h3>{school}</h3>
          <h4>
            {location} | <a href={website}>{linkLabel}</a>
          </h4>
        </div>
        <div className={classes.experiencesColRight}>
          <p>
            <h3>
              {program} | {date}
            </h3>
            <span>{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
