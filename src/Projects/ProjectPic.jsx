import React from "react";
import classes from "./Projects.module.css";

const ProjectPic = ({ title, image, description, stack, link, courseLink }) => {
  return (
    <div className={classes.ProjectPic}>
      <figure className={classes.projectFigure}>
        <a href={link} target="_blank">
          <img src={image} alt={title} className={classes.projectImg} />
          <figcaption className={classes.figCaption}>
            <h3>{title}</h3>
            <a href={courseLink} target="_blank">
              <p>{description}</p>
            </a>
            <p> Stack: {stack}</p>
          </figcaption>
        </a>
      </figure>
    </div>
  );
};

export default ProjectPic;
