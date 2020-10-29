import React from "react";
import classes from "./Projects.module.css";

const ProjectPic = ({ title, image, description, stack, link }) => {
  return (
    <div className={classes.ProjectPic}>
      <figure className={classes.projectFigure}>
        <img src={image} alt={title} className={classes.projectImg} />
        <figcaption className={classes.figCaption}>
          <h4>{title}</h4>
          <p>{description}</p>
          <p> {stack}</p>
          <a href={link} target="_blank" type="button">
            Check it out
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProjectPic;
