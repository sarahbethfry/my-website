import React from "react";
import bandwagon from "../Assets/bandwagon.png";
import classes from "./Projects.module.css";

const ProjectPic = (props) => {
  return (
    <div className={classes.ProjectPic}>
      <figure className={classes.projectFigure}>
        <img src={bandwagon} alt="Bandwagon" className={classes.projectImg} />
        <figcaption className={classes.figCaption}>
          <h4>Bandwagon.cool</h4>
          <p>
            An interactive map to search tours of your favorite artist or city.
          </p>
          <p> Stack: Javascript, Python, Flask, Postgres, SQLAlchemy</p>
          <a href="http://bandwagon.cool/" target="_blank" class="button">
            Check it out
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProjectPic;
