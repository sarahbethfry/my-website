import React from "react";
import classes from "./Experiences.module.css";

const WorkExperience = ({
  company,
  location,
  title,
  dates,
  positions,
  website,
  linkLabel,
  highlights,
}) => {
  return (
    <div className={classes.experienceSections}>
      <div className={classes.experiencesRow}>
        <div className={classes.experiencesColLeft}>
          <h3>{company}</h3>
          <h4>
            {location} | <a href={website}>{linkLabel}</a>{" "}
          </h4>
        </div>
        <div className={classes.experiencesColRight}>
          {positions.map(({ title, dates, highlights }) => (
            <p>
              <h3>
                {title} | {dates}
              </h3>
              <ul>
                {highlights.map((highlight) => (
                  <li className={classes.highlights}>{highlight}</li>
                ))}
              </ul>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
